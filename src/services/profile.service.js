import { api } from ".";

export const getUserByToken = async () => {
  const token = localStorage.getItem('token');
  
  try {
  const { data } = await api.get('/user/token', {
  headers: {
  token: token,
  },
  })
  return data.user
  
  } catch (error) {
  console.log('Error getting user data: ', error.message)
  }
  }


