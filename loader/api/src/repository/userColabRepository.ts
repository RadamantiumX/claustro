import type { UserColab, UserColabClientResponse } from "../declarations/index";
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
    async createUserColab(payload: Pick<UserColab, 'username' | 'password'>):Promise<void>{ // <-- Change to test
        await this.prismaClient.userColab.create({
            data:{
                username: payload.username,
                password: process.env.NODE_ENV === 'production' ? bcrypt.hashSync(payload.password, 10): payload.password,
                
            }
        })
        return
    }

    async createSuperAdmin(payload: Pick<UserColab, 'username' | 'password' >):Promise<void>{
      await this.prismaClient.userColab.create({
            data:{
                username: payload.username,
                password: process.env.NODE_ENV === 'production' ? bcrypt.hashSync(payload.password, 10): payload.password,
                isSuperAdmin: true
            }
        })
        return
    }

    async getUsersColab(): Promise<UserColabClientResponse>{
         const [users, totalUsers] =  await this.prismaClient.$transaction([
      this.prismaClient.userColab.findMany({
        omit: { password: true },
        orderBy: { createdAt: 'desc' }
      }), // Password excluding from the response
      this.prismaClient.userColab.count()
    ])

    return { users, totalUsers }
    }

    async getUserColab({id}: Pick<UserColab, 'id'>):Promise<Omit<UserColab, 'password'> | null>{
      const userColab = await this.prismaClient.userColab.findFirst({
      where: { id: id },
      omit: { password: true }
    })

    return userColab
    }

    async updateUserColab(payload:Pick<UserColab, 'id' | 'username' | 'password' | 'isSuperAdmin'>): Promise<void>{
       await this.prismaClient.userColab.update({
      where: { id: payload.id },
      data: {
        username: payload.username,
        password: process.env.NODE_ENV === 'production' ? bcrypt.hashSync(payload.password, 10): payload.password,
        isSuperAdmin: payload.isSuperAdmin,
        updatedAt: timeStampParsed()
      }
    })

    return
    }
    async destroyUserColab({id}: Pick<UserColab, 'id'>):Promise<void>{
     await this.prismaClient.userColab.delete({ where: { id: id } })
     return
    }
}