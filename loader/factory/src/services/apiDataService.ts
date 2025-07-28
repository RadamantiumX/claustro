import { IApiDataRepository, ApiDataMethods } from "index"
import { ApiDataRepository } from "../repository/apiDataRepository";


export class ApiDataService{
    private static instance:ApiDataService
    apiDataRepository:IApiDataRepository;
    apiData:ApiDataMethods;

    private constructor(apiDataRepository:IApiDataRepository){
        this.apiDataRepository = this.apiDataRepository
        this.apiData = {

        }
    }

    static getInstance(){
        if(!ApiDataService.instance){
            ApiDataService.instance = new ApiDataService(new ApiDataRepository)
        }
    }
}