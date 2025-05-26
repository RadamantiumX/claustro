import express from 'express'
import dotenv from 'dotenv'
import { Response, Request, NextFunction } from 'express'
import bodyParser from 'body-parser'
import AppError  from './errors/appErrors'
import { errorMiddleware } from './errors/middleware/error.middleware'

dotenv.config()

const app = express()

const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response, next: NextFunction)=>{
    res.status(200).json({message: 'Server is online on TURBOREPO'})
})

// Custom ERROR HANDLE
app.all('*', (req, res, next) => {
  const error = new AppError(
    'Resource not found',
    404,
    'Due to the mismatch between the client defnied user and existing users in the database...',
    false
  )
  next(error)
})
app.use(errorMiddleware)
app.listen(PORT, ()=>{
    console.log(`Server is online: http://localhost:${PORT}`)
})