import axios from "axios";

export default axios.create({
  baseURL:'https://swift-onions-rhyme-191-220-97-198.loca.lt',
  responseType: 'json',
})