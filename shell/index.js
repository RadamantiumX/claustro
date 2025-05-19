import colors from 'ansi-colors'
import { select, input, confirm } from "@inquirer/prompts"
import { exec } from 'child_process'
import { workspaceGroupConfig } from './config/workspaces.config.js'
import { packageManager } from './lib/data.lib.js'




export async function shellInput(){
  try{
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

  const confirmExec = await confirm({
    message: 'Want continue with the process?'
  }) 

  if(!confirmExec){
    console.log(colors.bgMagenta('Installation cancelled...'))
  }
    console.log(colors.bgBlue('Intalling...'))
    exec(`${pkgManagerSelector} add ${packageSelected}`, (error, stdout, stderr)=>{
        
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
  
 console.log(colors.bgBlue('Done!'))
  return
}catch(error){
  if(error.toString().startsWith('ExitPromptError')){
  console.error(colors.bgGreen('Your are Exit from package administrator...'))
  return
}else{
  console.error(error)
  return
}
}
}

shellInput()