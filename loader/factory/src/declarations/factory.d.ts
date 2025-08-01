import jwt from 'jsonwebtoken'

// JWT
export type JWTOptions = jwt.SignOptions

export type JWTSign = {
  id: string
  username: string
  isSuperAdmin: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expiresIn: Pick<JWTOptions, 'expiresIn'> | any | undefined
}

export type DecodedStringToken = jwt.JwtPayload | string

export interface IPayload {
  id: string
  username: string
  currentDate: string
  isSuperAdmin: boolean
}

export interface DecodedTokenKeys extends IPayload {
  iat: Date | number
  exp: Date | number
}

export interface IPayloadRefresh {
  id: string
  username: string
  currentDate: string
  isSuperAdmin: boolean
  version: string
}
// JWT

export interface UserColab {
  id: string
  username: string
  email: string | null
  password: string
  lastSignIn: Date | null
  createdAt: Date
  updatedAt: Date | null
  isSuperAdmin: boolean
}

export interface AuthRefreshToken {
  id: string
  refreshToken: string[]
  expiration: Date | null
  userColabId: string
  createdAt: Date
}

export interface PayloadRefreshToken {
  refreshToken: string
  userColabId: string
}

export interface Datum {
  id: number
  emailSource: string
  emailSourcePsw: string
  xUser: string
  xPsw: string
  userColabId: string
  createdAt: Date
  updatedAt: Date
}
export interface ApiData {
  id: number
  appName: string
  appId: string
  dataId: number
  createdAt: Date
  updatedAt: Date
}

export interface ApiKey {
  id: number
  apiKey: string
  apiKeySecret: string
  bearerToken: string
  accessToken: string
  accessTokenSecret: string
  apiDataId: number
  dataId: number
  createdAt: Date
  updatedAt: Date
}

export type UserColabService = {
  authData: Pick<UserColab, 'id' | 'username' | 'isSuperAdmin'>
  accessToken: string
  refreshToken: string
}

// Responses ⬇️
/**
 *
 * @function {readCountRecords}
 */

export type UserColabClientResponse = {
  users: Omit<UserColab, 'password'>[]
  totalUsers: number
}

export type ApiDataClientResponse = {
  apiDatas: Pick<ApiData, 'appId' | 'appName' | 'dataId'>[]
  totalApiData: number
}

export type ApiKeyClientResponse = {
  apiKeys: Omit<ApiKey, 'id' | 'createdAt' | 'updatedAt'>[]
  totalApiKeys: number
}

export type DatumClientResponse = {
  data: Omit<Datum, 'createdAt' | 'updatedAt'>[]
  totalData: number
}

export type AllRelatedData = {
  id: number
  emailSource: string
  emailSourcePsw: string
  xUser: string
  xPsw: string
  apiData: {
    appId: string
    appName: string
  } | null
  apiKeys: {
    apiKey: string
    apiKeySecret: string
    bearerToken: string
    accessToken: string
    accessTokenSecret: string
  } | null
}

export interface RateLimiterRule {
  endpoint: string
  rateLimit: {
    time: number
    limit: number
  }
}


export interface AuthMethods{
  login: (bodyReq: Pick<UserColab, "username" | "password">) => Promise<{
        authData: {
            id: string;
            username: string;
            isSuperAdmin: boolean;
        };
        accessToken: string;
    }>;
    register: (bodyReq:Pick<UserColab, "username" | "password">)=> Promise<void>;
    verifyCredentials: (authHeader: string) => Promise<Pick<UserColab, "username" | "password" | "id" | "isSuperAdmin"> | null>;
}

export interface trpcPayload {
    id: string,
    username: string,
    password: string,
    isSuperAdmin: boolean | null
}

export interface UserColabMethods{
  list: () => Promise<UserColabClientResponse>;
  create: (bodyReq:Pick<UserColab, "username" | "password"| "isSuperAdmin" >) => Promise<void>; 
  select: (id:Pick<UserColab, "id">) => Promise<> ;
  update: (payload:Pick<UserColab, "id"| "username" | "password" | "isSuperAdmin">)=>Promise<void>;
  delete: (id: Pick<UserColab, 'id'>) => Promise<void> ;
}