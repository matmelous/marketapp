import axios from "axios";

export default axios.create({
  baseURL:'https://yellow-dancers-tap-191-220-97-198.loca.lt',
  responseType: 'json',
})