import axios from 'axios'

const API_ENDPOINT = 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 1000,
  withCredentials: true
});

export default api