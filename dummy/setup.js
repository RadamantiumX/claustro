import { commandExeDummy } from "./index.js";
//   with {type: 'json'}
//  import { readFile } from 'fs/promises';
import fs from 'fs';


 const customs = commandExeDummy()


 customs.on('data', (data)=>{
     const choices = []
    if(fs.existsSync('./outlog.json')){
        console.log('This file already exists')
        console.log('Exit from log')
        return
    }
     JSON.parse(data).map((item)=>{
         choices.push({name: item.name, value: item.name, description: item.path})
     })
     try{
        fs.appendFileSync('outlog.json', JSON.stringify(choices), 'utf-8')
     }catch(error){
        console.log(`The error appear on: ${error}`)
     }
     
     
   
 })

