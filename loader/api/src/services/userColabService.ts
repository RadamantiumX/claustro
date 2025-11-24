import type { IuserColabRepository, UserColab, UserColabClientResponse, UserColabMethods } from "../types/index"
import { UserColabRepository } from "../repository/userColabRepository"
import prisma from "../config/prismaClient"
import { TRPCError } from "@trpc/server";

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
                  throw new TRPCError({code:'BAD_REQUEST', message:`Something went wrong!`})
               }
                
            },
            uniqueForId: async(bodyReq:Pick<UserColab, 'id'>)=>{
               try{
                  const foundForId = await this.userColabRepository.getUniqueId({id:bodyReq.id})
                  if(!foundForId){
                     throw new Error('The request data is not founded')
                  }
                  return foundForId

               }catch(error){
                  throw new TRPCError({code:'BAD_REQUEST', message:`${error}`})
               }
            },
            uniqueForUsername:async(bodyReq:Pick<UserColab, 'username'>)=>{
               try{
                  const foundForUsername = await this.userColabRepository.getUniqueUsername({username: bodyReq.username})
                  if(foundForUsername){
                     throw new Error('The request data is not founded')
                  }
                  return foundForUsername
               }catch(error){
                  throw new TRPCError({code:'BAD_REQUEST', message:`${error}!`})
               }
            },
            create: async (bodyReq:Pick<UserColab, "username" | "password"| "isSuperAdmin" >):Promise<void> => {
                  try{
                  const verifyUnique = await this.userColabRepository.getUniqueUsername({username:bodyReq.username})
                  if(verifyUnique){
                    throw new Error(`Duplicate data Constraints`)
                  }
                  await this.userColabRepository.createUserColab(bodyReq)
                  return

                  }catch(error){
                     throw new TRPCError({code:'BAD_REQUEST', message:`${error}`})
                  }
            },
            select: async (id:Pick<UserColab, "id">)=>{
                try{
                  const user = await this.userColabRepository.getUserColab(id)
                  return user
                }catch(error){
                  throw new TRPCError({code:'BAD_REQUEST', message:`Something went wrong!`})
                }
            },
            update: async (payload:Pick<UserColab, "id" | "username" | "password" | "isSuperAdmin">):Promise<void> =>{
               try{
               await this.userColabRepository.updateUserColab(payload)
               return
               }catch(error){
                  throw new TRPCError({code:'BAD_REQUEST', message:`Something went wrong!`})
               }
               
            },
            delete: async(id: Pick<UserColab, 'id'>):Promise<void>=>{
               try{
               await this.userColabRepository.destroyUserColab(id)
               return
               }catch(error){
                 throw new TRPCError({code:'BAD_REQUEST', message:`Something went wrong!`})
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