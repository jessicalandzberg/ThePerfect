const axios = require( 'axios' );
const {api} = require('./users_api-helper')

export const getProducts = async () => {
  const resp =await api.get('/products');
  return resp.data
}
