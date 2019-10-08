const axios = require( 'axios' );
const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const getProducts = async () => {
  const resp =await api.get('/products');
  return resp.data
}
