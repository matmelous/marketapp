import axios from "axios";

export default axios.create({

  baseURL:  'https://heavy-states-hammer-191-220-97-198.loca.lt',
  responseType: 'json',
})