import { IuserColabRepository, UserColab, UserColabClientResponse, UserColabMethods } from "factory"
import { UserColabRepository } from "../repository/userColabRepository"

export class UserColabService {
    private static instance:UserColabService
    userColabRepository:IuserColabRepository
    userData:UserColabMethods
    private constructor(userColabRepository:IuserColabRepository){
         this.userColabRepository = userColabRepository
         this.userData = {
            list:async ():Promise<UserColabClientResponse>=>{
                const allUsers = await this.userColabRepository.getUsersColab()
                return allUsers
            },
            create: async (bodyReq:Pick<UserColab, "username" | "password"| "isSuperAdmin" >):Promise<void> => {
                  const verifyUnique = await this.userColabRepository.getUnique({username:bodyReq.username})
                  if(!verifyUnique){
                    throw new Error()
                  }
                  await this.userColabRepository.createUserColab(bodyReq)
                  return
            },
            select: async (id:Pick<UserColab, "id">)=>{
                  const user = await this.userColabRepository.getUserColab(id)
                  return user
            },
            update: async (payload:Pick<UserColab, 'id' | 'username' | 'password' | 'isSuperAdmin'>):Promise<void> =>{
               await this.userColabRepository.updateUserColab(payload)
               return
            },
            delete: async(id: Pick<UserColab, 'id'>):Promise<void>=>{
               await this.userColabRepository.destroyUserColab(id)
               return
            }
         }
    }

    static getInstance (){
           if(!UserColabService.instance){
               UserColabService.instance = new UserColabService(new UserColabRepository)
               console.log('Service userColab ONLINE')
           }
           return UserColabService.instance
       }
}