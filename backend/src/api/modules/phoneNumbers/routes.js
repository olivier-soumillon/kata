import * as controllers from './controllers'
import * as validation from './validation'
import validate from '../../middlewares/validationHandler'

export default (app) => {
  app.post('/api/phone-numbers', validate(validation.createPhoneNumber), controllers.createPhoneNumber)
  app.post('/api/phone-numbers/:phoneNumberID', validate(validation.updatePhoneNumber), controllers.updatePhoneNumber)
  app.post('/api/phone-numbers/:phoneNumberID/delete', validate(validation.deletePhoneNumber), controllers.deletePhoneNumber)
  app.get('/api/phone-numbers', validate(validation.searchPhoneNumber), controllers.searchPhoneNumber)
}