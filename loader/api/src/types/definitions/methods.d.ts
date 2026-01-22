import type { ApiData, UserColab, ApiKey, UserColabClientResponse, AuthRefreshToken } from "src/types/factory";
import type { CascadeData } from "definitions/serviceInjection";

interface Entry{
  payload: string
}

export interface PasswordUpdateReq{
  username: string;
  password: string;
  newPassword: string;
}
export interface UserColabMethods{
  list: () => Promise<UserColabClientResponse>;
  uniqueForId: (bodyReq:Pick<UserColab, 'id'>) => Promise<Pick<UserColab, "id"| "username"|"isSuperAdmin"> | null>;
  uniqueForUsername: (bodyReq:Pick<UserColab, 'username'>) => Promise<Pick<UserColab, "id" | "username" | "password" | "isSuperAdmin"> | null>
  create: (bodyReq:Pick<UserColab, "username" | "password"| "isSuperAdmin" >) => Promise<void>; 
  select: (bodyReq:Pick<UserColab, "id">) => Promise<Pick<UserColab, 'username'| 'email'| 'createdAt'| 'isSuperAdmin'> | null>;
  update: (bodyReq:Pick<UserColab, 'username' | 'email'>)=>Promise<void>;
  updatePassword:(bodyReq:PasswordUpdateReq)=>Promise<void>;
  updateUsername:(bodyReq:Pick<UserColab, "id" | "username">)=>Promise<void>;
  updateEmail:(bodyReq:Pick<UserColab, "id" | "email">)=>Promise<void>;
  delete: (bodyReq: Pick<UserColab, 'id'>) => Promise<void> ;
}

export interface DataMethods{
   list: (bodyReq:{page:number, pageSize:number}) => Promise<{data:Pick<Datum, "id" | "emailSource" | "xUser" | "userColabId" | "createdAt"> [] | null, count:number |null}>;
   search:(bodyReq:{entry:string, page:number, pageSize:number})=>Promise<Pick<Datum, 'id' | 'emailSource' | 'xUser'> [] | null>;
   create: (bodyReq:Omit<Datum, "id" | "createdAt" | "updatedAt">) => Promise<void>;
   selectUniqueForId: (bodyReq:Pick<Datum, "id">) => Promise<{data: Pick<Datum , "id" | "emailSource" | "xUser" | "emailSourcePsw" | "xPsw">,apiData: Pick<ApiData, "id"| "appName" | "appId"> | null,apiKeys: Pick<ApiKey, "id" | "apiKey" | "apiKeySecret" | "bearerToken" | "accessToken" | "accessTokenSecret"> | null} | null>;
   selectUniqueForEmail: (bodyReq:Pick<Datum, "emailSource">) => Promise<{data: Pick<Datum , "id" | "emailSource" | "xUser" | "emailSourcePsw" | "xPsw">,apiData: Pick<ApiData, "id"| "appName" | "appId"> | null,apiKeys: Pick<ApiKey, "id" | "apiKey" | "apiKeySecret" | "bearerToken" | "accessToken" | "accessTokenSecret"> | null} | null>;
   update: (bodyReq:Omit<Datum, "createdAt" | "updatedAt" | "userColabId">) => Promise<void>;
   delete: (bodyReq:Pick<Datum, 'id'>) => Promise<void>;
}

export interface ApiDataMethods{
    create: (bodyReq:Omit<ApiData, "id"| "createdAt" | "updatedAt">) => Promise<void>;
    selectUniqueForId: (bodyReq:Pick<ApiData, "id">) => Promise<Pick<ApiData, "appName" | "appId"> | null>;
    update: (bodyReq:Omit<ApiData, "createdAt" | "updatedAt" | "dataId">) => Promise<void>;
    delete: (bodyReq:Pick<ApiData, "id">) => Promise<void>;
}

export interface ApiKeyMethods{
   create: (bodyReq:Omit<ApiKey, "id" | "updatedAt" | "createdAt">) =>Promise<void>;
   selectUniqueForId:(bodyReq:Pick<ApiKey, "id">)=>Promise<Pick<ApiKey, "id" | "apiKey" | "apiKeySecret" | "bearerToken" | "accessToken" | "accessTokenSecret"> | null>;
   update:(bodyReq:Omit<ApiKey, "updatedAt" | "createdAt" | "dataId" | "apiDataId">)=>Promise<void>;
   delete:(bodyReq:Pick<ApiKey, "id">)=>Promise<void>;
}

export interface RefreshTokenMethods{
   verifyOwner: (bodyReq:Pick<AuthRefreshToken, 'userColabId'| 'refreshToken'>) => Promise<Pick<AuthRefreshToken, 'refreshToken' | 'userColabId'> | null>;
   update: ({userColabId, refreshToken}:Pick<AuthRefreshToken, 'userColabId'|'refreshToken'>)=>Promise<void>;
   blackList: (refreshToken:string) => Promise<boolean>;
}

export interface AuthMethods{
  login: (bodyReq: Pick<UserColab, "username" | "password">) => Promise<{
        authData: {
            id: string;
            username: string;
            isSuperAdmin: boolean;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    register: (bodyReq:Pick<UserColab, "username" | "password">)=> Promise<void>;
    verifyCredentials: (authHeader: string) => Promise<Pick<UserColab, "username" | "password" | "id" | "isSuperAdmin"> | null>;
    destroySession:(bodyReq:Pick<AuthRefreshToken, "userColabId">) => Promise<void>;
}