import mongoose from 'mongoose'

const { MONGODB_URI } = process.env

const connect = async () => {
  if (mongoose.connection.readyState >= 1) return

  return await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
}

export default {
  connect
}
