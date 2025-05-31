import { IuserColabRepository, UserColab } from "factory"

export class UserColabService {
    private static instance:UserColabService
    userColabRepository:IuserColabRepository
    userData:any
    private constructor(userColabRepository:IuserColabRepository){
         this.userColabRepository = userColabRepository
         this.userData = {
            create: async (bodyReq:Pick<UserColab, "username" | "password"| "isSuperAdmin" >) => {
                  const verifyUnique = await this.userColabRepository.getUnique({username:bodyReq.username})
                  
            }
         }
    }
}