import initCors from './configCors'
import initBodyParser from './configBordyParser'
import initRoutes from './configRoutes'

export default async (app) => {
  initCors(app)
  initBodyParser(app)
  initRoutes(app)
}