import { axiosInstance } from "./axiosInstance";

export async function loginRequest(email, password) {
  try {
    const res = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    return res.data; // axios는 json 자동 변환됨
  } catch (error) {
    // 서버에서 보낸 에러 메시지 그대로 throw
    throw error.response?.data || error;
  }
}
