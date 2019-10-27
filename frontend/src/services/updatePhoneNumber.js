import api from './api'

export default ({ phoneNumberID, lastName, firstName, phoneNumber }) => {
  const params = {
    lastName,
    firstName,
    phoneNumber
  }

  return api.post(`/phone-numbers/${phoneNumberID}`, params)
}