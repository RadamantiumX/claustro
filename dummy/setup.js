import { commandExe } from "./index.js";

const customs = commandExe()


customs.on('data', (data)=>{
    const choices = []
   // console.log(JSON.parse(data))
    JSON.parse(data).map((item)=>{
        choices.push({name: item.name, value: item.name, description: item.path})
    })

    console.log(choices)
    
})

