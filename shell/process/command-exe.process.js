import { exec } from 'child_process'

export function commandExe(pkgManager, pkgSelected) {
    try{
        exec(`${pkgManager} add ${pkgSelected}`, (error, stdout, stderr)=>{
            
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