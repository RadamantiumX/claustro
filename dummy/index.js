"ts-check"
import { exec, spawn, execFile } from 'child_process'

import colors from 'ansi-colors'


export function commandExeDummy() {
    try{

       let io = []
        const turbo = spawn(`turbo ls`, [`--output=json`, `| jq -r ".packages.items"`],
            {
                stdio: 'overlapped',
                shell: true
            }
        )
      

        turbo.stdout.on('data', (data)=>{
       
          JSON.parse(data).map((item)=>{
             io.push({name:item.name, value: item.name, description: item.path})
            
          })
           
          
         })

         turbo.stderr.on('error', (error)=>{
            console.error(error.message)
            
         })

         turbo.on('close', (code)=>{
            
         })
        
        return turbo.stdout
    }catch(error){
        console.error(`Unexpected error: ${error}`)
    }
    
}


