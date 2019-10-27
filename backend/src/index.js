import app from './app'
import config from './config'
import {createServer, startServer} from './server'
import {connectDatabase} from './db'

export default async () => {
  await connectDatabase()

  const server = createServer(app)

  await config(app)
  startServer(server)
}