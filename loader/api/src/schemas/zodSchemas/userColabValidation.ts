import z from 'zod'
import type { UserColab } from '../../types/index'
;

export const userSchema = z
  .object({
    id: z.string(),
    lastSignIn: z.string(),
    username: z
      .string({
        required_error: 'The username is riquired'
      })
      .min(8, {
        message: 'The username must be larger than 8 characters minimum'
      }),
    password: z
      .string({
        required_error: 'The password is riquered'
      })
      .min(8, { message: 'The password must be at 8 characters minimum' }),
    email:z.string().email({message:'Must be a valid email'}).nullable(),  
    isSuperAdmin: z.boolean()
  })
  .required()

  export async function validateUser(input: Pick<UserColab, 'username' | 'password' | 'isSuperAdmin'>) {
    const parseSync = await userSchema.safeParseAsync(input)
    return parseSync
  }

export const newUserSchema = z.object({
  username: z.string({
     required_error:'The username is required'
  })
   .min(8, {
        message: 'The username must be larger than 8 characters minimum'
      }),
   password:z.string({
      required_error: 'The password is riquered'
     }),
   confirmPassword:z.string({
      required_error: 'You must confirm new password'
     }),
   email:z.string().email({message:'Must be a valid email'}).nullable(),
   isSuperAdmin: z.boolean().default(false)
})
.refine((data)=> data.password === data.confirmPassword, {
      message: 'Passwords no match'
   })

// Extends "userSchema" properties
  export const newPasswordSchema = z.object({
     password:z.string({
      required_error: 'The password is riquered'
     }),
     newPassword: z.string({
      required_error: 'The new password is required'
     }),
     confirmNewPassword:z.string({
      required_error: 'You must confirm new password'
     }),
     id:z.string(),
  })
   .refine((data)=> data.newPassword === data.confirmNewPassword, {
      message: 'Passwords no match'
   })

 
 