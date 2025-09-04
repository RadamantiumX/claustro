import type { IuserColabRepository, UserColab, UserColabClientResponse, UserColabMethods } from "../declarations/index"
import { UserColabRepository } from "../repository/userColabRepository"
import prisma from "../config/prismaClient"
import { EnvFactoryErrors } from "../errors/envFactoryErrors"


export class UserColabService {
    private static instance:UserColabService
    userColabRepository:IuserColabRepository
    userData:UserColabMethods
    private constructor(userColabRepository:IuserColabRepository){
         this.userColabRepository = userColabRepository
         this.userData = {
            list:async ():Promise<UserColabClientResponse>=>{
               try{
                const allUsers = await this.userColabRepository.getUsersColab()
                return allUsers
               }catch(error){
                  throw new EnvFactoryErrors()
               }
                
            },
            create: async (bodyReq:Pick<UserColab, "username" | "password"| "isSuperAdmin" >):Promise<void> => {
                  try{
                  const verifyUnique = await this.userColabRepository.getUnique({username:bodyReq.username})
                  if(verifyUnique){
                    throw new Error(`The appear on: ${bodyReq.username}`)
                  }
                  await this.userColabRepository.createUserColab(bodyReq)
                  return

                  }catch(error){
                     throw new EnvFactoryErrors()
                  }
            },
            select: async (id:Pick<UserColab, "id">)=>{
                try{
                  const user = await this.userColabRepository.getUserColab(id)
                  return user
                }catch(error){
                  throw new EnvFactoryErrors()
                }
            },
            update: async (payload:Pick<UserColab, "id" | "username" | "password" | "isSuperAdmin">):Promise<void> =>{
               try{
               await this.userColabRepository.updateUserColab(payload)
               return
               }catch(error){
                  throw new EnvFactoryErrors()
               }
               
            },
            delete: async(id: Pick<UserColab, 'id'>):Promise<void>=>{
               try{
               await this.userColabRepository.destroyUserColab(id)
               return
               }catch(error){
                  throw new EnvFactoryErrors()
               }
            }
         }
    }

    static getInstance (){
      
               if(!UserColabService.instance){
               UserColabService.instance = new UserColabService(new UserColabRepository(prisma))
               console.log('Service userColab ONLINE')
               
           }
           return UserColabService.instance
         
           
       }
}