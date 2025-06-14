import { prisma } from "../config/prismaClient";
import { UserColab, UserColabClientResponse } from "factory";
import { timeStampParsed } from "../helper/timeStampParser";
import bcrypt from 'bcryptjs'



export class UserColabRepository{
    async getUnique({username}:Pick<UserColab, 'username'>):Promise<Pick<UserColab, "id" | "username" | "password" | "isSuperAdmin"> | null>{
       const unique = await prisma.userColab.findUnique({
         where:{ username: username },
         select: { id: true, username: true, password: true, isSuperAdmin: true }
       })
        
     return unique
       
    }

    async updateTimestampSignIn({username}:Pick<UserColab, "username">):Promise<void>{
        const lastSignIn = timeStampParsed()
        await prisma.userColab.update({
            where: { username: username },
            data: { lastSignIn: lastSignIn }
        })
        return
    }
    async createUserColab(payload: Pick<UserColab, 'username' | 'password'>):Promise<void>{
        await prisma.userColab.create({
            data:{
                username: payload.username,
                password: bcrypt.hashSync(payload.password, 10),
                
            }
        })
        return
    }

    async createSuperAdmin(payload: Pick<UserColab, 'username' | 'password' >):Promise<void>{
      await prisma.userColab.create({
            data:{
                username: payload.username,
                password: bcrypt.hashSync(payload.password, 10),
                isSuperAdmin: true
            }
        })
        return
    }

    async getUsersColab(): Promise<UserColabClientResponse>{
         const [users, totalUsers] =  await prisma.$transaction([
      prisma.userColab.findMany({
        omit: { password: true },
        orderBy: { createdAt: 'desc' }
      }), // Password excluding from the response
      prisma.userColab.count()
    ])

    return { users, totalUsers }
    }

    async getUserColab({id}: Pick<UserColab, 'id'>):Promise<Omit<UserColab, 'password'> | null>{
         const userColab = await prisma.userColab.findFirst({
      where: { id: id },
      omit: { password: true }
    })

    return userColab
    }

    async updateUserColab(payload:Pick<UserColab, 'id' | 'username' | 'password' | 'isSuperAdmin'>): Promise<void>{
       await prisma.userColab.update({
      where: { id: payload.id },
      data: {
        username: payload.username,
        password: bcrypt.hashSync(payload.password, 10),
        isSuperAdmin: payload.isSuperAdmin,
        updatedAt: timeStampParsed()
      }
    })

    return
    }
    async destroyUserColab({id}: Pick<UserColab, 'id'>):Promise<void>{
     await prisma.userColab.delete({ where: { id: id } })
     return
    }
}