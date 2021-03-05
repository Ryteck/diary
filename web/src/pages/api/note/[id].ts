import { NextApiHandler } from 'next'
import database from '../../../services/database'

const Handler: NextApiHandler = async (request, response) => {
  const { id } = request.query
  const { method } = request

  try {
    await database.connect()

    switch (method) {
      case 'GET':
        break
      case 'PUT':
        break
      case 'DELETE':
        break
    }

    response.status(200).json({ id })
  } catch (e) {
    response.status(400).json({ error: String(e) })
  }
}

export default Handler
