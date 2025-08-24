import 'dotenv/config'
import type { IPayload } from '../declarations/index'
import jwt from 'jsonwebtoken'


export const SECRET_KEY:Readonly<string> = process.env.JWT_SECRET || 'secret'


export default {
  sign: (payload: IPayload, JWTOptions: jwt.SignOptions) =>
    jwt.sign(payload, SECRET_KEY, JWTOptions),

  verify: (token: string) => jwt.verify(token, SECRET_KEY)
}
