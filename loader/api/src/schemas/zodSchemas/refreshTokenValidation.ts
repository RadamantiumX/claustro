import z from 'zod'

export const refreshTokenSchema = z
 .object({
    id:z.string(),
    refreshToken:z.string().min(5, {message:'too short entry'}),
    expiration:z.string(),
    userColabId: z.string()
 })