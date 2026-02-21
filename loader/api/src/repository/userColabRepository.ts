import type { UserColab, UserColabClientResponse } from "../types/index";
import { timeStampParsed } from "../helper/timeStampParser";
import bcrypt from 'bcryptjs'
import { PrismaClient } from "@prisma/client";



export class UserColabRepository{
   constructor(private prismaClient:PrismaClient){}
   
    async getUniqueUsername({username}:Pick<UserColab, 'username'>):Promise<Pick<UserColab, "id" | "username" | "password" | "isSuperAdmin"> | null>{
     
           const unique = await this.prismaClient.userColab.findUnique({
         where:{ username: username },
         select: { id: true, username: true, password: true, isSuperAdmin: true }
       })
        
     return unique
     
       
       
    }

    async getUniqueId({id}:Pick<UserColab, 'id'>):Promise<Pick<UserColab, "id" | "username" | "isSuperAdmin"> | null>{
        const unique = await this.prismaClient.userColab.findUnique({
         where:{ id: id },
         select: { id: true, username: true, isSuperAdmin: true }
       })
        
     return unique
    }

    async updateTimestampSignIn({username}:Pick<UserColab, "username">):Promise<void>{
        const lastSignIn = timeStampParsed()
        await this.prismaClient.userColab.update({
            where: { username: username },
            data: { lastSignIn: lastSignIn }
        })
        return
    }
    // TODO: add email to create user
    async createUserColab(payload: Pick<UserColab, 'username' | 'password' | 'email' |'isSuperAdmin'>):Promise<void>{ // <-- Used only for SUPER ADMIN
        await this.prismaClient.userColab.create({
            data:{
                username: payload.username,
                password: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'dev' ? bcrypt.hashSync(payload.password, 10): payload.password, //bcrypt.hashSync(payload.password, 10),
                email: payload.email,
                isSuperAdmin: payload.isSuperAdmin
            }
        })
        return
    }

    async createSuperAdmin(payload: Pick<UserColab, 'username' | 'password'>):Promise<void>{
      await this.prismaClient.userColab.create({
            data:{
                username: payload.username,
                password: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'dev' ? bcrypt.hashSync(payload.password, 10): payload.password,//bcrypt.hashSync(payload.password, 10),
                isSuperAdmin: true
            }
        })
        return
    }

    async getUsersColab():Promise<UserColabClientResponse>{
         const [users, totalUsers] =  await this.prismaClient.$transaction([
      this.prismaClient.userColab.findMany({
        omit: { password: true },
        orderBy: { createdAt: 'desc' }
      }), // Password excluding from the response
      this.prismaClient.userColab.count()
    ])

    return { users, totalUsers }
    }

    async getUserColab(payload: Pick<UserColab, 'id'>):Promise<Pick<UserColab, 'username'| 'email'| 'createdAt'| 'isSuperAdmin'> | null>{
      const userColab = await this.prismaClient.userColab.findFirst({
      where: { id: payload.id },
      omit: { 
        id:true,
        lastSignIn:true,
        updatedAt:true,
        password:true
      }
    })

    return userColab
    }

    async getUniquePassword(payload:Pick<UserColab, "id">){
         const userColabPassword = await this.prismaClient.userColab.findFirst({
           where: {id: payload.id},
           select:{
            password:true
           }
         })

         return userColabPassword
    }

    async updateUserColab(payload:Pick<UserColab, 'username' | 'email'>): Promise<void>{
       await this.prismaClient.userColab.update({
      where: { username: payload.username },
      data: {
        username: payload.username,
        email: payload.email,
        updatedAt: timeStampParsed()
      }
    })

    return
    }
    
  
    async updateUserColabPassword(payload:Pick<UserColab, "id" | "password">){
        await this.prismaClient.userColab.update({
          where: { id:payload.id },
          data:{
             password: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'dev' ? bcrypt.hashSync(payload.password, 10): payload.password, //bcrypt.hashSync(payload.password, 10),
             updatedAt:timeStampParsed()
          }
        })

        return
    }

    async updateUserColabUsername(payload:Pick<UserColab, "id" | "username">):Promise<void>{
      await this.prismaClient.userColab.update({
        where: {id: payload.id},
        data:{
          username:payload.username,
          updatedAt: timeStampParsed()
        }
      })
    }

    async updateUserColabEmail(payload:Pick<UserColab, "id" | "email">):Promise<void>{
       await this.prismaClient.userColab.update({
        where: {id: payload.id},
        data:{
          email:payload.email,
          updatedAt: timeStampParsed()
        }
      })
    }


    async destroyUserColab({id}: Pick<UserColab, 'id'>):Promise<void>{
     await this.prismaClient.userColab.delete({ where: { id: id } })
     return
    }
}