export type HttpCode = 200 | 300 | 400 | 401 | 403 | 404 | 500 | 501

export interface JWTError {
    name: string | undefined
    message: string | undefined
}

export interface JWTExpiredError extends JWTError{
   expiredAt: any
}

export interface JWTNotBeforeError extends JWTError {
  date:any
}