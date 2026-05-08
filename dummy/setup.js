import { commandExe } from "./index.js";

const customs = commandExe()

customs.on('data', (data)=>{
    console.log(JSON.parse(data))
})

