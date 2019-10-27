import api from './api'

export default (searchKey) => api.get(`/phone-numbers?searchKey=${searchKey}`)