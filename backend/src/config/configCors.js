import cors from 'cors'
import config from 'config'

export default (app) => {
  app.use(cors({
    origin: config.get('cors.allowedOrigins'),
    credentials: true
  }))
}