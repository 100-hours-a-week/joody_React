import axios from "axios";

export async function loginRequest(email, password) {
  try {
    const res = await axios.post(
      "http://localhost:8080/auth/login",
      { email, password },
      { withCredentials: true } // refresh token cookie 받기 위해 필요
    );

    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}
