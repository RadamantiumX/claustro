import colors from 'ansi-colors'
import inquirer from 'inquirer'
import { exec } from 'child-process'

export function shellInput(){
    inquirer
  .prompt(combQuestions)
  .then((answers) => {
    console.log(colors.bgCyan('Loading...'))
    exec(`${answers.mng} i ${answers.pckg}`, (error, stdout, stderr)=>{
        
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
  
  })
  .catch((error) => {
    console.error(error);
  });
}