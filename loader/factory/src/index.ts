import express from 'express'
import dotenv from 'dotenv'
import { Response, Request, NextFunction } from 'express'

dotenv.config()

const app = express()

const PORT = 3000

app.get('/', (req: Request, res: Response, next: NextFunction)=>{
    res.status(200).json({message: 'Server is online on TURBOREPO'})
})

app.listen(PORT, ()=>{
    console.log(`Server is online: http://localhost:${PORT}`)
})