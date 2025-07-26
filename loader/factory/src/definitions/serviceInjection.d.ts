import { Datum, ApiData, ApiKey } from "def";

export interface Overload{
    id: Pick<Datum, "id">;
    emaiSource: Pick<Datum, "emailSource">;
    xUser: Pick<Datum, "xUser">;
    apiData: Pick<ApiData, "id" | "appName" | "appId">;
    apiKeys: Pick<ApiKey, "id" | "apiKey" | "apiKeySecret" | "bearerToken" | "accessToken" | "accessTokenSecret">
}

export interface IuserColabRepository {
    getUnique({username}:Pick<UserColab, 'username'> ): Promise<Pick<UserColab, "id" | "username" | "password" | "isSuperAdmin"> | null>;
    updateTimestampSignIn(username: Pick<UserColab, "username">): Promise<void>;
    createUserColab(payload: Pick<UserColab, 'username' | 'password'>): Promise<void>;
    createSuperAdmin(payload: Pick<UserColab, 'username' | 'password'>):Promise<void>;
    getUsersColab(): Promise<UserColabClientResponse>;
    getUserColab(id: Pick<UserColab, 'id'>): Promise<Omit<UserColab, 'password'> | null>;
    updateUserColab(payload: Pick<UserColab, 'id' | 'username' | 'password' | 'isSuperAdmin'>): Promise<void>;
    destroyUserColab(id: Pick<UserColab, 'id'>): Promise<void>;
}

export interface IDataRepository{
     getUnique({id}:Pick<Datum, "id">):Promise<Overload>;
     getForEmailSource({emailSource}:Pick<Datum, "emailSource">):Promise<Overload>;
     allData():Promise<ApiData, "id"| "emailSource" | "xUser" | "userColabId" | "createdAt">;
     createData(payload:Omit<Datum, "id" | "createdAt" | "updatedAt">):Promise<void>;
     updateData(payload:Omit<Datum, "createdAt" | "updatedAt">):Promise<void>;
     destroyData(payload: Pick<Datum, 'id'>):Promise<void>;
}