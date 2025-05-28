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