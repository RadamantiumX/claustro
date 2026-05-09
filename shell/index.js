import colors from 'ansi-colors'
import { select, input, confirm } from "@inquirer/prompts"
import { workspaceGroupConfig } from './config/workspaces.config.js'
import { packageManager } from './config/data.config.js'
import { commandExe } from './process/command-exe.process.js'
import { SIGN_NAME } from './ASCII/console.avatar.js' // ASCII Sign Dev Name: Radamantium
import { exec } from 'child_process'

import fs from 'fs'

/**
 * Executable script: "pnpm run ws-pkg"
 * Install dependencies packages with short node-command into any workspace folder of choice
 * @returns {void}
 */
export async function shellInput(){

  
  console.log(colors.magenta(SIGN_NAME))
  try{
    // If the file doesn't exists
  if(!fs.existsSync('../claustro/shell/ASCII/choices.json')){
 // Create the file
 // First use the confirm of inquirer prompt 
  }

  // inquirer/prompts   
  const workspace = await select({ // All exists Workspace folders on the projects
    message: "Select a workspace folder 📁",
    choices: JSON.parse(fs.readFileSync('../claustro/shell/ASCII/choices.json'))
  })

   const pkgManagerSelector = await select({ // 
      message: "Select a package manager 🚀",
       choices : packageManager
   })

   const packageSelected = await input({
      message: 'Enter the name of the package 📦'
   })
  const confirmType = await confirm({
     message: "It's a DEV dependency? 🤔"
  })
  const confirmExec = await confirm({
    message: 'Want continue with the process? 🤔'
  }) 

  if(!confirmExec){
    console.log(colors.bgMagenta('Installation cancelled...'))
    return
  }
    console.log(colors.bgBlue('Installing...'))

  // Child process Executable  
  commandExe(workspace, pkgManagerSelector, packageSelected, confirmType)
  
 
  return
}catch(error){
  if(error.toString().startsWith('ExitPromptError')){
  console.error(colors.bgGreen('Your are Exit from package administrator...'))
  return
}else{
  console.error(`The error appear on: ${error}`)
  return
}
}
}

shellInput()