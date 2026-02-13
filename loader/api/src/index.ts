import express, {Application} from 'express'
import dotenv from 'dotenv'
import { Response, Request, NextFunction } from 'express'
import bodyParser from 'body-parser'
import { createContext } from './lib/trpcContext';
import { appRouter } from './routers'
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors'
import cookieParser from 'cookie-parser';



dotenv.config()

const app:Application = express()

const PORT = 3000
app.use(cors({origin: 'http://localhost:5173', credentials: true}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.get('/', (req: Request, res: Response, next: NextFunction)=>{
    res.status(200).json({message: 'Server is online on TURBOREPO', Cookies: req.cookies !== null ? req.cookies : 'Not set cookies'})
    
})

// app.all('*', (req:Request, res:Response, next:NextFunction)=>{
//   const error = new AppError(
//     'Resource not found',
//      404,
//     'Due to the mismatch between the client defnied user and existing users in the database...',
//     false
//   )
//   next(error)
// })

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: createContext
  })
)


// Handle Promise Rejections
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Promise Rejection:', reason)
})
// Handle Uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exceptions:', error)
  process.exit(1) // App restart
})
app.listen(PORT, ()=>{
    console.log(`Server is online: http://localhost:${PORT}`)
})