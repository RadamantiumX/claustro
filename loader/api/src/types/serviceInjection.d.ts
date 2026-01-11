import { PayloadRefreshToken } from './factory';
import { Datum, ApiData, ApiKey, UserColab, AuthRefreshToken, UserColabClientResponse, PayloadRefreshToken } from "src/types/factory";

export interface Entry{
  payload: string
}
export interface CascadeData{
    data: Pick<Datum , "id" | "emailSource" | "xUser" | "emailSourcePsw" | "xPsw">;
    apiData: Pick<ApiData, "id"| "appName" | "appId"> | null;
    apiKeys: Pick<ApiKey, "id" | "apiKey" | "apiKeySecret" | "bearerToken" | "accessToken" | "accessTokenSecret"> | null;
}



export interface IuserColabRepository {
    getUniqueUsername({username}:Pick<UserColab, 'username'> ): Promise<Pick<UserColab, "id" | "username" | "password" | "isSuperAdmin"> | null>;
    getUniqueId({id}:Pick<UserColab, 'id'> ): Promise<Pick<UserColab, "id" | "username" | "isSuperAdmin"> | null>;
    updateTimestampSignIn(username: Pick<UserColab, "username">): Promise<void>;
    createUserColab(payload: Pick<UserColab, 'username' | 'password'>): Promise<void>; // I change here
    createSuperAdmin(payload: Pick<UserColab, 'username' | 'password'>):Promise<void>;
    getUsersColab(): Promise<UserColabClientResponse>;
    getUserColab(id: Pick<UserColab, 'id'>): Promise<Omit<UserColab, 'password'> | null>;
    updateUserColab(payload: Pick<UserColab, 'id' | 'username' | 'password' | 'isSuperAdmin'>): Promise<void>;
    destroyUserColab(id: Pick<UserColab, 'id'>): Promise<void>;
}

export interface IDataRepository{
     getUnique(payload:Pick<Datum, "id">):Promise<{data: Pick<Datum , "id" | "emailSource" | "xUser" | "emailSourcePsw" | "xPsw">,apiData: Pick<ApiData, "id"| "appName" | "appId"> | null,apiKeys: Pick<ApiKey, "id" | "apiKey" | "apiKeySecret" | "bearerToken" | "accessToken" | "accessTokenSecret"> | null} | null>;
     searchData(payload:{entry:string, page:number, pageSize:number}):Promise<Pick<Datum, 'id' | 'emailSource' | 'xUser'> [] | null>;
     getForEmailSource(payload:Pick<Datum, "emailSource">):Promise<{data: Pick<Datum , "id" | "emailSource" | "xUser" | "emailSourcePsw" | "xPsw">,apiData: Pick<ApiData, "id"| "appName" | "appId"> | null,apiKeys: Pick<ApiKey, "id" | "apiKey" | "apiKeySecret" | "bearerToken" | "accessToken" | "accessTokenSecret"> | null} | null>;
     allData(payload:{page:number, pageSize:number}):Promise<{data:Pick<Datum, "id"| "emailSource" | "xUser" | "userColabId" | "createdAt"> [] | null, count:number | null}>;
     createData(payload:Omit<Datum, "id" | "createdAt" | "updatedAt">):Promise<void>;
     updateData(payload:Omit<Datum, "createdAt" | "updatedAt" | "userColabId">):Promise<void>;
     destroyData(payload: Pick<Datum, 'id'>):Promise<void>;
}

export interface IApiDataRepository{
    getUnique(payload:Pick<ApiData, "id">):Promise<Pick<ApiData, "appName" | "appId"> | null>;
    createApiData(payload: Omit<ApiData, "id"| "createdAt" | "updatedAt">):Promise<void>;
    updateApiData(payload:Omit<ApiData, "createdAt" | "updatedAt" | "dataId">):Promise<void>;
    destroyApiData(payload:Pick<ApiData, "id">):Promise<void>;
}

export interface IApiKeyRepository{
    getUnique(payload:Pick<ApiKey, "id">):Promise<Pick<ApiKey, "id" | "apiKey" | "apiKeySecret" | "bearerToken" | "accessToken" | "accessTokenSecret"> | null>;
    createApiKey(payload:Omit<ApiKey, "id" | "updatedAt" | "createdAt">):Promise<void>;
    updateApiKey(payload:Omit<ApiKey, "updatedAt" | "createdAt" | "dataId" | "apiDataId">):Promise<void>;
    destroyApiKey(payload: Pick<ApiKey, "id">):Promise<void>;
}

export interface IRefreshTokenRepository{
    createRefeshToken(payload:PayloadRefreshToken):Promise<void>;
    checkSession(payload:Pick<AuthRefreshToken, 'refreshToken'>):Promise<Pick<AuthRefreshToken, 'refreshToken' | 'userColabId'> | null>
    uniqueOwner(payload:Pick<AuthRefreshToken, 'userColabId'| 'refreshToken'>):Promise<Pick<AuthRefreshToken, 'refreshToken' | 'userColabId'> | null>
    uniqueUserColab(payload:Pick<AuthRefreshToken, 'userColabId'>):Promise<Pick<AuthRefreshToken,'id' | 'refreshToken' | 'userColabId'>| null>
    updateRefreshToken(payload:Pick<AuthRefreshToken, 'userColabId'|'refreshToken'>):Promise<void>
    deleteRefreshToken(payload:Pick<AuthRefreshToken, 'userColabId'>):Promise<void>
}