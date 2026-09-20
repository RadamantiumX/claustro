import {spawn} from 'node:child_process'

const io = []

export async function npxCli() {
  
    try{
        
        const turbo = spawn(`npx turbo ls --output=json`,
            {
                shell:true,
                stdio: ['inherit', 'pipe', 'pipe', 'overlapped'],
            }
        )
      

        turbo.stdout.on('data', (data)=>{
         const parsed = JSON.parse(data)
         parsed.packages.items.map((item)=>{
            io.push(item)
         })
         console.log(parsed.packages.items)
         })

         turbo.stderr.on('error', (error)=>{
            console.error(error.message)
            
         })

         turbo.on('close', (code)=>{
            if(code !== 0){
                console.error('Error on process')
            }
            return
         })
     return
    //    turbo.on('close', (code)=>{
    //          if(code !== 0){
    //         console.error('Error on process')
    //         return
    //        }
    //        const fullBuff = Buffer.concat(io)
    //        const jsonString = new TextDecoder('utf-8').decode(fullBuff)
    //        const parsedObj = JSON.parse(jsonString)
           
    //        items.push(...parsedObj)
    //      })
        
    //     return items
    }catch(error){
        console.error(`Unexpected error: ${error}`)
    }
    
}

npxCli()
console.log(io)
// console.log(io)
// const { turbo, io } = await npxCli()
// async function clousure(jsonChunk){
//     try{
//     const fullBuff =  Buffer.concat(jsonChunk)
//      const jsonString = new TextDecoder('utf-8').decode(fullBuff)
//      const parsedObj = await JSON.parse(jsonString)
//      console.log(parsedObj.packages.items)
//      return parsedObj

//     }catch(error){
//         console.error(`An error appear on: ${error}`)
//         return
//     }
  
// }
// await clousure(io)

// turbo.on('close',(code)=>{
//     if(code !== 0){
//         console.error('Error on process')
//     }
    
// })





// function cbTurbo(code){
//   if(code !== 0) {
//     console.error('Error on process')
//     return
//   }
//      const fullBuff = Buffer.concat(io)
//      const jsonString = new TextDecoder('utf-8').decode(fullBuff)
//      const parsedObj = JSON.parse(jsonString)
//      console.log(parsedObj.packages.items)
//      return parsedObj
// }