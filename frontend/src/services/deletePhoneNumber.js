import api from './api'

export default (phoneNumberID) => api.post(`/phone-numbers/${phoneNumberID}/delete`)