import { commandExeDummy } from "./index.js";
import { select } from "@inquirer/prompts";
//   with {type: 'json'}
//  import { readFile } from 'fs/promises';
import fs from 'fs';


 const customs = commandExeDummy()
 

 const turboEvent = customs.on('data', eventReady)

// Use the Callback for main function... Only works in this way 
async function eventReady(data){
    const choices = []
     JSON.parse(data).map((item)=>{
         choices.push({name: item.name, value: item.name, description: item.path})
     })
    const selected = await select({
        message: 'select on options',
        choices: choices
    })
     const selectedTwo = await select({
        message: 'Somethinf to addiing?',
        choices: [
            {
                name: 'first value',
                value: 'first',
                description: 'And example desc'
            },
             {
                name: 'second value',
                value: 'second',
                description: 'And example desc'
            },
             {
                name: 'third value',
                value: 'third',
                description: 'And example desc'
            }
        ]
    }) 

    const selectThree = await select({
        message: 'Another more?',
        choices: [
            {
                name: 'Chrome',
                value: 'chrome',
                description: 'Popular browser'
            },
             {
                name: 'Edge',
                value: 'microsoft_edge',
                description: 'The explorer line'
            },
             {
                name: 'Brave',
                value: 'brave',
                description: 'Used by developers'
            }
        ]
    })
 }



