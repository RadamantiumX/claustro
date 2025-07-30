import { IDataRepository, DataMethods, Datum } from "index";
import { DataRepository } from "../repository/dataRepository";


///// TODO: adding the methods on definitions ✅
export class DataService{
    private static instance:DataService;
    dataRepository:IDataRepository;
    data: DataMethods;

    private constructor(dataRepository:IDataRepository){
        this.dataRepository = dataRepository
        this.data = {
            list:async()=>{
                const allData = await this.dataRepository.allData()
                return allData
            },
            create:async(bodyReq:Omit<Datum, "id" | "createdAt" | "updatedAt">):Promise<void>=>{
                // TODO: Validations here! 🌍
                await this.dataRepository.createData(bodyReq)
                return
            },
            selectUniqueForId:async(bodyReq:Pick<Datum, "id">)=>{
                const uniqueForId = await this.dataRepository.getUnique(bodyReq)
                return uniqueForId
            },
            selectUniqueForEmail:async(bodyReq:Pick<Datum, "emailSource">)=>{
                const uniqueForEmail = await this.dataRepository.getForEmailSource(bodyReq)
                return uniqueForEmail
            },
            update:async(bodyReq:Omit<Datum, "createdAt" | "updatedAt" | "userColabId">)=>{
                // TODO: Validations here! 🌍
                await this.dataRepository.updateData(bodyReq)
                return
            },
            delete:async(bodyReq:Pick<Datum, 'id'>)=>{
                await this.dataRepository.destroyData(bodyReq)
                return
            }
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