import crypto from 'crypto'

const { PASSWORD_SECRET } = process.env

const hash = (text: string): string => {
  let alt = `$${PASSWORD_SECRET}%${text}`
  for (let i = 0; i < 10; i++) {
    alt = crypto
      .createHash('sha256')
      .update(alt)
      .digest('hex')
  }
  return alt
}

export default hash
