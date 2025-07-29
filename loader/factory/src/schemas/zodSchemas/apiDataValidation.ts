import z from 'zod'


export const apiDataSchema = z
  .object({
    appName: z.string(),
    appId: z.string()
  })
  .required()