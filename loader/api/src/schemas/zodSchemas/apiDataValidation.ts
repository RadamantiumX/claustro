import z from 'zod'


export const apiDataSchema = z
  .object({
    id: z.number(),
    appName: z.string().min(5, {message:'too short entry'}),
    appId: z.string().min(5, {message:'too short entry'}),
    dataId: z.number().min(5, {message:'too short entry'})
  })
  .required()