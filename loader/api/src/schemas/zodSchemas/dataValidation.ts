import z from 'zod'


export const dataSchema = z
  .object({
    id: z.number(),
    emailSource: z.string().email({message:'Must be a valid email address'}),
    emailSourcePsw: z.string().min(5, {message:'Too short entry'}),
    xUser: z.string().min(5, {message:'Too short entry'}),
    xPsw: z.string().min(5, {message:'Too short entry'}),
    userColabId: z.string()
  })
  .required()

