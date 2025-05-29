import {  initTRPC, TRPCError } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'

// see the documentation
export const createContext = ({ req, res, }:trpcExpress.CreateExpressContextOptions) =>{
    // JWT to improve
  //  const token = req.headers.authorization 
}