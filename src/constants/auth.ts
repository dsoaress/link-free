const JWT_EXPIRES_IN = 15000000 // minutes
const SESSION_EXPIRES_IN = 30 // days

const { JWT_SECRET } = process.env
const SESSION_EXPIRES_IN_S = SESSION_EXPIRES_IN * 24 * 60 * 60
const SESSION_EXPIRES_IN_MS = SESSION_EXPIRES_IN_S * 1000

if (!JWT_SECRET && !process.browser) throw new Error('JWT_SECRET is not defined')

export const authConstants = {
  JWT_SECRET,
  JWT_EXPIRES_IN,
  SESSION_EXPIRES_IN_S,
  SESSION_EXPIRES_IN_MS
}
