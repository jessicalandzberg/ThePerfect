const axios = require( 'axios' );
const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const getFavs = async () => {
  const token = localStorage.getItem('authToken');
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const resp =await api.get('/favs');
  return resp.data
}

export const addFav = async (productid) => {
  const token = localStorage.getItem('authToken');
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const resp =await api.post(`/products/${productid}/favs`);
  return resp.data
}

export const removeFav = async (productid) => {
  const token = localStorage.getItem('authToken');
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const resp =await api.delete(`/products/${productid}/favs`);
  return resp.data
}
