import type { IuserColabRepository, UserColab, UserColabClientResponse, UserColabMethods, PasswordUpdateReq } from "../types/index"
import { UserColabRepository } from "../repository/userColabRepository"
import prisma from "../config/prismaClient"
import { TRPCError } from "@trpc/server";
import bcrypt from "bcryptjs";


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
            select: async (bodyReq:Pick<UserColab, "id">)=>{
                try{
                  const user = await this.userColabRepository.getUserColab({id:bodyReq.id})
                  return user
                }catch(error){
                  throw new TRPCError({code:'BAD_REQUEST', message:`Something went wrong!`})
                }
            },
            update: async (bodyReq:Pick<UserColab, 'username' | 'email'>):Promise<void> =>{
               try{
               await this.userColabRepository.updateUserColab(bodyReq)
               return
               }catch(error){
                  throw new TRPCError({code:'BAD_REQUEST', message:`Something went wrong!`})
               }
               
            },
            // TODO: add definitions TYPE to this method
            updatePassword: async(bodyReq:PasswordUpdateReq)=>{
               try{
                  // Try username password
                  const verifyUnique = await this.userColabRepository.getUniquePassword({username:bodyReq.username})
                  
                  if(!verifyUnique){
                     throw new Error('Not found User')
                  }

                  const verifyPsw = await bcrypt.compare(
                     bodyReq.password,
                     verifyUnique?.password
                  )
                  if(!verifyPsw){
                     throw new Error('The password provided is wrong!')
                  }
                  await this.userColabRepository.updateUserColabPassword({username:bodyReq.username, password:bodyReq.newPassword})
                  return
               }catch(error){
                  throw new TRPCError({code:'BAD_REQUEST', message:`Something went wrong!`})
               }
            },
            updateUsername: async(bodyReq:Pick<UserColab, "id" | "username">)=>{
               try{
                  await this.userColabRepository.updateUserColabUsername(bodyReq)
                  return
               }catch(error){
                 throw new TRPCError({code:'BAD_REQUEST', message:'Something went wrong!'})
               }
            },
            updateEmail: async(bodyReq:Pick<UserColab, "id" | "email">)=>{
               try{
                  await this.userColabRepository.updateUserColabEmail(bodyReq)
                  return
               }catch(error){
                  throw new TRPCError({code:'BAD_REQUEST', message:'Something went wrong!'})
               }
            },
            delete: async(bodyReq: Pick<UserColab, 'id'>):Promise<void>=>{
               try{
               await this.userColabRepository.destroyUserColab({id:bodyReq.id})
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