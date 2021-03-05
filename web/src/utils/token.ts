import jwt from 'jsonwebtoken'

const { TOKEN_SECRET } = process.env

const ONE_HOUR = 60 * 60
const ONE_DAY = ONE_HOUR * 24

const generateToken = (long: boolean): string =>
  jwt.sign({ access: true }, TOKEN_SECRET, { expiresIn: (long ? ONE_DAY : ONE_HOUR) })

export default {
  generateToken
}
