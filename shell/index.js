import colors from 'ansi-colors'
import { select, input, confirm } from "@inquirer/prompts"
import { exec } from 'child_process'
import { workspaceGroupConfig } from './config/workspaces.config.js'
import { packageManager } from './config/data.config.js'
import { commandExe } from './process/command-exe.process.js'



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

  commandExe(workspace, packageManager, packageSelected)   
  
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