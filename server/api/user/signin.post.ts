import { User } from "~/server/models/User"
import { signToken } from "~/utils/signToken"
import { verifyPassword } from "~/utils/verifyPassword"

export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await readBody(event)

    const user = await User.findOne({email})
    if (!user) {
      return createError({
        message: 'User not found',
        statusCode: 404
      })
    }

    const isSamePassword = await verifyPassword(password, user.password as string)
    if (!isSamePassword) {
      return createError({
        message: 'Unauthorized',
        statusCode: 401
      })
    }

    setCookie(event, 'access_token',  signToken({ 
      user: user.id,
      email: user.email
    }))
  } catch(error) {
    return createError({
      message: error as string,
      statusCode: 500
    })
  }
})