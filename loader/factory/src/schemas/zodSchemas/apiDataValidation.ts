import z from 'zod'


export const apiDataSchema = z
  .object({
    id: z.number(),
    appName: z.string(),
    appId: z.string()
  })
  .required()