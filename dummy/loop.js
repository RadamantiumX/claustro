import { select, confirm, input } from "@inquirer/prompts";

const looping = {
    first:{
        message: 'Choose your ride',
        choices: [
            {
            name: 'motocicle',
            value: 'motorcicle',
            description: 'Fast and practical'
            },
            {
            name: 'car',
            value: 'car',
            description: 'Comfort and fastest'
            },
            {
            name: 'bike',
            value: 'bike',
            description: 'Helthy and zero cost'
            },
        ] 
    },
    second:{
        message: 'Choose your worktime',
        choices:  [
            {
            name: 'part-time',
            value: 'part-time',
            description: 'For college stundents'
            },
            {
            name: 'mid-time',
            value: 'mid-time',
            description: 'A little bit money'
            },
            {
            name: 'full-time',
            value: 'full-time',
            description: 'Much more money'
            },
        ]
    },
    third:{
        message: 'Choose your pet',
        choices:  [
            {
            name: 'dog',
            value: 'dog',
            description: 'Loyal and loving'
            },
            {
            name: 'cat',
            value: 'cat',
            description: 'Companion and loving'
            },
            {
            name: 'both',
            value: 'both',
            description: 'Aww.. you wanna all the pets...'
            },
        ]
    },
    fourth:{
        message: 'Confirm yours selections?'
    },
    fifth:{
        message: 'Enter your name'
    }
}

 async function handleLoop(params) {
    try{
        const vehicle = await select(looping.first)
        const work = await select(looping.second)
        const pet = await select(looping.third)
        const acept = await confirm(looping.fourth)
        if(!acept){
            console.log('We feel sad for your refuse... Bye bye!')
            return
        }
        const name = await input(looping.fifth)
        
    console.log(`Hello ${name} ---> Your choices: ${vehicle}, ${work} & ${pet}`)    
    return
    return {vehicle, work, pet}
    }catch(error){
        console.log('Exite from this inquirer... Bye bye')
    }
    
}

handleLoop()