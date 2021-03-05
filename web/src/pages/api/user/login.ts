import { NextApiHandler } from 'next'
import hash from '../../../helpers/hash'
import token from '../../../utils/token'

const Handler: NextApiHandler = async (request, response) => {
  const { password, long } = request.body
  try {
    if (password === undefined) {
      throw new Error('Password is required')
    }

    const newPassword = hash(password)

    if (newPassword === '') {
      throw new Error('Incorrect password')
    }

    const newToken = token.generateToken(long)

    response.status(200).json({ token: newToken })
  } catch (e) {
    response.status(400).json({ error: String(e) })
  }
}

export default Handler
