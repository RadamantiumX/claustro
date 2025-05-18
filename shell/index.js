import colors from 'ansi-colors'
import { select, input } from "@inquirer/prompts"
import { exec } from 'child_process'
import { workspaceGroupConfig } from './config/workspaces.config.js'
import { packageManager } from './lib/data.lib.js'







export async function shellInput(){
   
  const workspace = await select({
    message: "Select a package manager",
    choices: workspaceGroupConfig
  })

   const pkgManagerSelector = await select({
      message: "Select a package manager",
       choices : packageManager
   })

   const packageSelected = await input({
      message: 'Enter the name of the package'
   })
   
    exec(`${packageManager} i ${packageSelected}`, (error, stdout, stderr)=>{
        
            if(error){
                console.error(`Error ${error.message}`)
                console.log(colors.bgRed('The package name is incorrect...'))
                return
            }
            if(stderr){
                console.error(`stderr: ${stderr}`)
                return
            }
            console.log(stdout)
            console.log(colors.bgGreen('🚀 Succcess!'))
        })
  
 
  return
}