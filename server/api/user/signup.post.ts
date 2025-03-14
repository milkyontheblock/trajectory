import { User } from "~/server/models/User"
import { hashPassword } from "~/utils/hashPassword"

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const hashedPassword = await hashPassword(body.password)

    return await new User({...body, password: hashedPassword}).save()
  } catch(error) {
    return createError({
      message: error as string,
      statusCode: 500
    })
  }
})