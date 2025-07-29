import z from 'zod'


export const dataSchema = z
  .object({
    emailSource: z.string().email(),
    emailSourcePsw: z.string(),
    xUser: z.string(),
    xPsw: z.string(),
  })
  .required()

