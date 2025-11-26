import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, // 쿠키 포함
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
