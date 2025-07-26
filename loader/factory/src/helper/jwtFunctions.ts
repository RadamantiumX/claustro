import { DecodedTokenKeys, JWTSign, JWTOptions } from 'def'
import jwt from '../utils/jwt'
import { timeStampParsed } from './timeStampParser'

export const JWTverifyAndDecode = (token: string): DecodedTokenKeys => {
  // Verify the token
  const decodedToken: any = jwt.verify(token)

  // Can TAKE any of this KEYS on this RESPONSE OBJECT
  return {
    id: decodedToken.id,
    username: decodedToken.username,
    currentDate: decodedToken.currentDate,
    isSuperAdmin: decodedToken.isSuperAdmin,
    iat: decodedToken.iat,
    exp: decodedToken.exp
  }
}


export const JWTtokenSign = ({
  id,
  username,
  isSuperAdmin,
  expiresIn
}: JWTSign): string => {
  const currentDate = timeStampParsed().toString()
  const JWTOptions: JWTOptions = { expiresIn: expiresIn, algorithm: 'HS256' }
  const token = jwt.sign(
    { id, username, currentDate, isSuperAdmin },
    JWTOptions
  )
  return token
}