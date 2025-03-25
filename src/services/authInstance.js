import axios from "axios";
import { store } from "../redux/store"; // Import Redux store if using Redux
import authSlice from "../redux/authSlice";
import { logout } from "./auth";

const axiosApiInstance = axios.create({
  baseURL: "https://your-api-url.com/api", // Replace with your API base URL
  withCredentials: true, // Ensures cookies (JWT) are sent with requests
});

// Request Interceptor: Add Authorization Header
axiosApiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle 401 Unauthorized
axiosApiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      store.dispatch(authSlice.logout()); // Dispatch logout action (clears token)
      logout();
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
