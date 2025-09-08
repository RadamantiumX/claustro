import z from 'zod'

export const refreshTokenSchema = z
 .object({
    id:z.string(),
    refreshToken:z.string(),
    expiration:z.string(),
    userColabId: z.string()
 })