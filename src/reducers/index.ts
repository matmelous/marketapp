import axios from "axios";

export default axios.create({
  baseURL:'https://nice-oranges-doubt-191-220-97-198.loca.lt',
  responseType: 'json',
})