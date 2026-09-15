import { spawn } from "node:child_process";


function workspacesFound(){
    const chunksArr = []
    const ws = spawn('pnpm m ls --json',{
        stdio: ['overlapped'],
        shell: true
    })

    ws.stdout.on('data', (chunks)=>{
       chunksArr.push(chunks)
    })

    ws.stderr.on('error', (error)=>{
        throw new Error(`The current Error: ${error}`)
    })

    ws.on('close', (code)=>{
        if(code !== 0){
            console.error('Error on process')
            return
        }

        try{
            const fullBuff = Buffer.concat(chunksArr)
            const jsonString = new TextDecoder('utf-8').decode(fullBuff)
            const jsonObj = JSON.parse(jsonString)
            // TODO: this works perfect!
            jsonObj.map((item, index)=>{
                for(const [key, value] of Object.entries(jsonObj[index])){
                   if(key === "name"){
                      console.log(`${key}: ${value}`)
                   }
              }
            })
               

        }catch(error){
           console.error('Failed on try to get data from BUFFER')
        }
    })

    return
}

workspacesFound()