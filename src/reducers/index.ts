import axios from "axios";

export default axios.create({
  baseURL:'https://moody-moons-beg-191-220-97-198.loca.lt',
  responseType: 'json',
})