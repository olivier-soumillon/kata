import api from './api'

export default ({ lastName, firstName, phoneNumber }) => {
  const params = {
    lastName,
    firstName,
    phoneNumber
  }

  return api.post('/phone-numbers', params)
}