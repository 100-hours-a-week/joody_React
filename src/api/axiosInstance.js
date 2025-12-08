import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, // 쿠키 포함
  headers: {
    "Content-Type": "application/json",
  },
});
