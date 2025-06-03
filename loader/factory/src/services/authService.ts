import { IuserColabRepository } from "factory";
import { UserColab, AuthMethods } from "factory";
import AppError from "../errors/appErrors";
import bcrypt from 'bcryptjs'
import { JWTtokenSign, JWTverifyAndDecode } from "../helper/jwtFunctions";
import { UserColabRepository } from "../repository/userColabRepository";



// Dependency Injection + Singleton PATTERN
export class AuthService{
    private static instance: AuthService; // Only for instance
    userColabRepository: IuserColabRepository;
    auth:AuthMethods
    private constructor(userColabRepository:IuserColabRepository){
        this.userColabRepository = userColabRepository
        this.auth = {
             login: async (bodyReq: Pick<UserColab, 'username' | 'password'>) => {
            const verifyUser = await this.userColabRepository.getUnique({username: bodyReq.username})
        if(!verifyUser){
           throw new AppError(
            'Unauthorized',
            401,
            'Username or password is wrong, code: 401',
            false
           )
        }
        const verifyPsw = await bcrypt.compare(
            bodyReq.password,
            verifyUser.password
        )
        if(!verifyPsw){
           throw new AppError(
            'Unauthorized',
            401,
            'Username or password is wrong, code: 401',
            false
           )
        }

        await this.userColabRepository.updateTimestampSignIn({
            username: bodyReq.username
        })
         const accessToken = JWTtokenSign({
            id: verifyUser.id,
            username: verifyUser.username,
            isSuperAdmin: verifyUser.isSuperAdmin,
            expiresIn: '1h'
         })
        return {
            authData: {
                id: verifyUser?.id,
                username: verifyUser.username,
                isSuperAdmin: verifyUser.isSuperAdmin
            },
            accessToken: accessToken
        }
      },
      register: async (bodyReq:Pick<UserColab, "username" | "password">) => {
        const verifyUser = await this.userColabRepository.getUnique({username: bodyReq.username})
        if(verifyUser){
           throw new AppError(
            'Bad Request',
            400,
            'Provide a different username',
            false
           )
          
        }
         await this.userColabRepository.createSuperAdmin(bodyReq)
         return
      },
      verifyCredentials: async (authHeader:string) => {
        const { username } = JWTverifyAndDecode(authHeader)
        const checkUser = await this.userColabRepository.getUnique({username})
        return checkUser
      }
  }
    }

   static getInstance (){
       if(!AuthService.instance){
           AuthService.instance = new AuthService(new UserColabRepository)
           console.log('Service Auth ONLINE')
       }
       return AuthService.instance
   }

}