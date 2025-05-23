import { exec } from 'child_process'
import { sentenceMaker } from '../helper/sentence-maker.helper.js'
import colors from 'ansi-colors'

export function commandExe(folderSelected,pkgManager, pkgSelected, type) {
    try{
        const flagSentence = sentenceMaker(folderSelected)
        exec(`${pkgManager} add ${type ? '-D' : ''} ${pkgSelected} ${flagSentence}`, (error, stdout, stderr)=>{
            
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
    }catch(error){
        console.error(error)
    }
    
}