import api from "../reducers/index";

export const useApi = () => ({
  createAcout: async (name:string, email:string, password:string) => {
    const response = await api.post('/user/add', {name, email, password});
    return response.data
  },
  addProducts: async (name:string, brand:string, weight:number) => {
    const response = await api.post('/product/add', { name, brand, weight})
    return response.data
  },
  verificarEmail: async (email:string) => {
    const response = await api.post('/verify/user', {email})
    return response.data
  },
  verifyProduct: async (name:string, brand:string) => {
    const response = await api.post('/verify/product', {name, brand})
    return response.data
  },
  VerifyLogin: async (email:string, password:string ) => {
    const response = await api.post('/verify/login', {email, password})
    return response.data
  }

})