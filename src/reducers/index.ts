import axios from "axios";

export default axios.create({
  baseURL:"https://lovely-moose-add-191-220-97-198.loca.lt",
  responseType: 'json',
})