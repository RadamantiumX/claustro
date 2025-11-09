import z, { number } from 'zod'


export const apiKeySchema = z
  .object({
    id: number(),
    apiKey: z.string().min(5, {message:'too short entry'}),
    apiKeySecret: z.string().min(5, {message:'too short entry'}),
    bearerToken: z.string().min(5, {message:'too short entry'}),
    accessToken: z.string().min(5, {message:'too short entry'}),
    accessTokenSecret: z.string().min(5, {message:'too short entry'}),
    apiDataId: z.number(),
    dataId: z.number()

  })
  .required()