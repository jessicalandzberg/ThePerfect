const axios = require( 'axios' );
export const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const loginUser = async (loginData) => {
  const resp =await api.post('/auth/login', loginData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp =await api.post('/users', { user: registerData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const editUser = async (userID, userData) => {
  const resp = await api.put(`/users/${userID}`, {user: userData});
  return resp.data
}
