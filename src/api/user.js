import axiosInstance from "./axiosInstance";

export async function signupRequest(formData) {
  try {
    const response = await axiosInstance.post("/users/signup", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}
