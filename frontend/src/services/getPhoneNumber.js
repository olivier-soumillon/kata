import api from './api'

export default (phoneNumberID) => api.get(`/phone-numbers/${phoneNumberID}`)