import express, {Application} from 'express'
import dotenv from 'dotenv'
import { Response, Request, NextFunction } from 'express'
import bodyParser from 'body-parser'
import { jwtErrorMiddleware, typeScriptError } from './errors/middleware/errorMiddleware'
import { createContext } from './lib/trpcContext'
import { appRouter } from './routers'
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors'

dotenv.config()

const app:Application = express()

const PORT = 3000
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response, next: NextFunction)=>{
    res.status(200).json({message: 'Server is online on TURBOREPO'})
})

app.use(jwtErrorMiddleware)
// tRPC
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: createContext
  })
)
app.use(typeScriptError)

app.listen(PORT, ()=>{
    console.log(`Server is online: http://localhost:${PORT}`)
})