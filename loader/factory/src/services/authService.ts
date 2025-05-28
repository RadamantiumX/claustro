import { IuserColabRepository } from "factory";
export class AuthService{
    userColabRepository: IuserColabRepository;
    constructor(userColabRepository:IuserColabRepository){
        this.userColabRepository = userColabRepository
    }
}