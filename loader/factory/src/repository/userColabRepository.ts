import { prisma } from "../config/prismaClient";
import { UserColab } from "factory";

export class UserColabRepository{
    async getUnique(username:Pick<UserColab, "username">):Promise<Pick<UserColab, "id" | "username" | "password" | "isSuperAdmin">>{
       const unique = await prisma.userColab.findUnique({
         where:{ username: username },
         select: { id: true, username: true, password: true, isSuperAdmin: true }
       })
        
     return unique
       
    }

    async updateTimestampSignIn(){
        
    }
    async createUserColab(){

    }

    async getUsersColab(){

    }

    async getUserColab(){

    }

    async updateUserColab(){

    }
    async destroyUserColab(){

    }
}