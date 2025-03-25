import axios from "axios";

const backendURL = process.env.REACT_APP_API_URL;

export const login = async (email, password) => {
  try {
    const {data} = await axios.post(`${backendURL}/api/auth/login`, { email, password })
    localStorage.setItem("userToken", data?.jwt)
    return data; // Expected: { user, token }
  } catch (error) {
    return error
  }

};

export const logout = async () => {
  return await axios.get(`${backendURL}/api/auth/logout`);
};

export const register = async (name, email, password) => {
try {
  const response = await axios.post(`${backendURL}/api/auth/register`,{ name, email, password });
  return response.data; // Expected: { user }
} catch (error) {
  return error
}
};
