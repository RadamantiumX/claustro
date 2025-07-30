import z, { number } from 'zod'


export const apiKeySchema = z
  .object({
    id: number(),
    apiKey: z.string(),
    apiKeySecret: z.string(),
    bearerToken: z.string(),
    accessToken: z.string(),
    accessTokenSecret: z.string(),
    apiDataId: z.number(),
    dataId: z.number()

  })
  .required()