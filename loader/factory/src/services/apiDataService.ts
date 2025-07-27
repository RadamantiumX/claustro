import { IApiDataRepository, ApiDataMethods } from "index"

export class ApiDataService{
    private static instance:ApiDataService
    apiDataRepository:IApiDataRepository;
    apiData:ApiDataMethods;

    
}