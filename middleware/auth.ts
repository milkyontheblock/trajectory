export default defineNuxtRouteMiddleware((event) => {
  const accessToken = useCookie('access_token')
  if (typeof accessToken === 'undefined') {
    return createError({
      statusCode: 401
    })
  }
})