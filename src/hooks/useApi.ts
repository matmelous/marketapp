import api from "../reducers/index";

export const useApi = () => ({
  createAcout: async (name: string, email: string, password:string) => {
    const response = await api.post('/user/add', {name, email, password});
    return response.data
  },
  addProducts: async (name: string, brand:string, weight:number, imagens:null) => {
    const response = await api.post('/product/add', { name, brand, weight, imagens})
    return response.data
  },
  userRender: async (email: string) => {
    const response = await api.post('/verify/user', {email})
    return response.data
  }
})