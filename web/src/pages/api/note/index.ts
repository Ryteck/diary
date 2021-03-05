import { NextApiHandler } from 'next'
import database from '../../../services/database'

const Handler: NextApiHandler = async (request, response) => {
  const { method } = request

  try {
    await database.connect()

    switch (method) {
      case 'GET':
        break
      case 'POST':
        break
    }

    response.status(200).json({})
  } catch (e) {
    response.status(400).json({ error: String(e) })
  }
}

export default Handler
