export interface IPayload {
  id: string
  username: string
  currentDate: string
  isSuperAdmin: boolean
}

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

export type UserColabClientResponse = {
  users: Omit<UserColab, 'password'>[]
  totalUsers: number
}

export interface IuserColabRepository {
    getUnique(username: Pick<UserColab, "username">): Promise<Pick<UserColab, "id" | "username" | "password" | "isSuperAdmin">>;
    updateTimestampSignIn(username: Pick<UserColab, "username">): Promise<void>;
    createUserColab(payload: Pick<UserColab, 'username' | 'password' | 'isSuperAdmin'>): Promise<void>;
    getUsersColab(): Promise<UserColabClientResponse>;
    getUserColab(id: Pick<UserColab, 'id'>): Promise<Omit<UserColab, 'password'> | null>;
    updateUserColab(payload: Pick<UserColab, 'id' | 'username' | 'password' | 'isSuperAdmin'>): Promise<void>;
    destroyUserColab(id: Pick<UserColab, 'id'>): Promise<void>;
}