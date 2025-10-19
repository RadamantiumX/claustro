import z from 'zod'


export const dataSchema = z
  .object({
    id: z.number(),
    emailSource: z.string().email(),
    emailSourcePsw: z.string(),
    xUser: z.string(),
    xPsw: z.string(),
    userColabId: z.string()
  })
  .required()

