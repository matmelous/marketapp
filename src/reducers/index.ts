import axios from "axios";

export default axios.create({

  baseURL:  'https://famous-knives-kneel-191-220-97-198.loca.lt/',
  responseType: 'json',
})