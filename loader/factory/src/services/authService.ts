import { IuserColabRepository } from "factory";
import { UserColab } from "factory";
import AppError from "../errors/appErrors";
import bcrypt from 'bcryptjs'
import { JWTtokenSign } from "../helper/jwtFunctions";

// Dependency Injection
export class AuthService{
    userColabRepository: IuserColabRepository;
    constructor(userColabRepository:IuserColabRepository){
        this.userColabRepository = userColabRepository
    }

    async login(bodyReq: Pick<UserColab, 'username' | 'password'>){
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
    }

   async verifyCredentials(){
      
  }
}