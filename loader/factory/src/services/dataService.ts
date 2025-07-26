import { IDataRepository, DataMethods } from "def";
import { DataRepository } from "../repository/dataRepository";


// TODO: adding the methods on definitions
export class DataService{
    private static instance:DataService;
    dataRepository:IDataRepository;
    data: DataMethods;

    private constructor(dataRepository:IDataRepository){
        this.dataRepository = dataRepository
        this.data = {
            list:async()=>{
                
            },
            create:async()=>{},
            select:async()=>{},
            update:async()=>{},
            delete:async()=>{}
        }
    }

    static getInstance(){
            if(!DataService.instance){
                       DataService.instance = new DataService(new DataRepository)
                       console.log('Service userColab ONLINE')
                       
                   }
                   return DataService.instance
    }
}