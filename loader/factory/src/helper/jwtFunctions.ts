import type {  DecodedTokenKeys, DecodedStringToken, JWTSign, JWTOptions } from '../declarations/index'
import jwt from '../utils/jwt'
import { timeStampParsed } from './timeStampParser'
import { TOKEN_LIFETIME, UNIX_CURRENT_TIME } from '../const/tokenExpiration'

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

export const JWTBlacklist = (
  refreshTokenCookie: string
): { expired: boolean; userColabId: string } => {
  const decodedRefreshToken: DecodedTokenKeys | DecodedStringToken | any = jwt.verify(refreshTokenCookie)

  return {
    expired: !(decodedRefreshToken.iat + TOKEN_LIFETIME < UNIX_CURRENT_TIME),
    userColabId: decodedRefreshToken.id
  }
}