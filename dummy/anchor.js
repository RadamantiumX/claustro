import {spawn} from 'node:child_process'

export async function npxCli() {
  
    try{
        let io = []
        const turbo = spawn(`npx turbo ls --output=json`,
            {
                shell:true,
                stdio: ['overlapped'],
            }
        )
      

        turbo.stdout.on('data', (chunks)=>{
         
         io.push(chunks)    
         })

         turbo.stderr.on('error', (error)=>{
            console.error(error.message)
            
         })
     return {turbo, io}
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

const { turbo, io } = await npxCli()

turbo.on('close',cbTurbo)


function cbTurbo(code){
  if(code !== 0) {
    console.error('Error on process')
    return
  }
     const fullBuff = Buffer.concat(io)
     const jsonString = new TextDecoder('utf-8').decode(fullBuff)
     const parsedObj = JSON.parse(jsonString)
     console.log(parsedObj.packages.items)
     return parsedObj
}