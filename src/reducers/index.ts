import axios from "axios";

export default axios.create({

  baseURL:  'https://tall-knives-like-191-220-97-198.loca.lt',
  responseType: 'json',
})