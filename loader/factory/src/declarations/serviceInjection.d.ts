import { PayloadRefreshToken } from './factory.d';
import { Datum, ApiData, ApiKey, UserColab, AuthRefreshToken, UserColabClientResponse, PayloadRefreshToken } from "factory";

export interface Overload{
     id: number;
  emailSource: string;
  xUser: string;
  apiData: {
    id:number;
    appName:string;
    appId: string;
  } | null;
  apiKeys: {
    id: number;
    apiKey: string;
    apiKeySecret: string;
    bearerToken: string;
    accessToken: string;
    accessTokenSecret: string;
  } | null;
}

export interface IuserColabRepository {
    getUnique({username}:Pick<UserColab, 'username'> ): Promise<Pick<UserColab, "id" | "username" | "password" | "isSuperAdmin"> | null>;
    updateTimestampSignIn(username: Pick<UserColab, "username">): Promise<void>;
    createUserColab(payload: Pick<UserColab, 'username' | 'password'>): Promise<void>; // I change here
    createSuperAdmin(payload: Pick<UserColab, 'username' | 'password'>):Promise<void>;
    getUsersColab(): Promise<UserColabClientResponse>;
    getUserColab(id: Pick<UserColab, 'id'>): Promise<Omit<UserColab, 'password'> | null>;
    updateUserColab(payload: Pick<UserColab, 'id' | 'username' | 'password' | 'isSuperAdmin'>): Promise<void>;
    destroyUserColab(id: Pick<UserColab, 'id'>): Promise<void>;
}

export interface IDataRepository{
     getUnique(payload:Pick<Datum, "id">):Promise<Overload | null>;
     getForEmailSource(payload:Pick<Datum, "emailSource">):Promise<Overload | null>;
     allData():Promise<Pick<Datum, "id"| "emailSource" | "xUser" | "userColabId" | "createdAt"> [] | null>;
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
    checkOwner(payload:{id:string}):Promise<Pick<AuthRefreshToken, 'refreshToken' | 'userColabId'> | null>
}