import { ApiData, UserColab, ApiKey, UserColabClientResponse, AuthRefreshToken } from "factory";

export interface UserColabMethods{
  list: () => Promise<UserColabClientResponse>;
  unique: (bodyReq:Pick<UserColab, 'id'>) => Promise<Pick<UserColab, "id"| "username"|"isSuperAdmin"> | null>
  create: (bodyReq:Pick<UserColab, "username" | "password"| "isSuperAdmin" >) => Promise<void>; 
  select: (id:Pick<UserColab, "id">) => Promise<> ;
  update: (payload:Pick<UserColab, "id"| "username" | "password" | "isSuperAdmin">)=>Promise<void>;
  delete: (id: Pick<UserColab, 'id'>) => Promise<void> ;
}

export interface DataMethods{
   list: () => Promise<Pick<Datum, "id" | "emailSource" | "xUser" | "userColabId" | "createdAt"> [] | null>;
   create: (bodyReq:Omit<Datum, "id" | "createdAt" | "updatedAt">) => Promise<void>;
   selectUniqueForId: (bodyReq:Pick<Datum, "id">) => Promise<Overload | null>;
   selectUniqueForEmail: (bodyReq:Pick<Datum, "emailSource">) => Promise<Overload | null>;
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
   verifyOwner: (refreshToken:string) => Promise<Pick<AuthRefreshToken, 'refreshToken' | 'userColabId'> | null>;
   blackList: (refreshToken:string) => Promise<void>;
}