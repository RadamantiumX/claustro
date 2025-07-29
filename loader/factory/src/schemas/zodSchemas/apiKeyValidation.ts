import z from 'zod'


export const apiKeySchema = z
  .object({
    apiKey: z.string(),
    apiKeySecret: z.string(),
    bearerToken: z.string(),
    accessToken: z.string(),
    accessTokenSecret: z.string()
  })
  .required()