import axios from 'axios'

const api = axios.create({
  baseURL: 'https://eager-aliens-bake-191-220-97-198.loca.lt',
  responseType: 'json',
}); 

export default api;
