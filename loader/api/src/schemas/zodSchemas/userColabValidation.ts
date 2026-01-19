import z from 'zod'
import type { UserColab } from '../../types/index'

export const userSchema = z
  .object({
    id: z.string(),
    lastSignIn: z.string(),
    username: z
      .string({
        required_error: 'The nickname is riquired'
      })
      .min(8, {
        message: 'The nickname must be larger than 8 characters minimum'
      }),
    password: z
      .string({
        required_error: 'The password is riquered'
      })
      .min(8, { message: 'The password must be at 8 characters minimum' }),
    isSuperAdmin: z.boolean()
  })
  .required()

  export async function validateUser(input: Pick<UserColab, 'username' | 'password' | 'isSuperAdmin'>) {
    const parseSync = await userSchema.safeParseAsync(input)
    return parseSync
  }

// Extends "userSchema" properties
  export const newPasswordSchema = userSchema.extend({
     newPassword: z.string({
      required_error: 'The new password is required'
     })
  })