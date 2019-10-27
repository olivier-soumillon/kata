import config from 'config'
import mongoose from 'mongoose'

export default async () => {
  const connectionString = config.get('database.connectionString')

  const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  }

  await mongoose.connect(connectionString, options)
}