import axiosInstance from "./axiosInstance";

// 회원가입
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

// 프로필 유저 조회
export async function fetchUserProfile(userId) {
  const response = await axiosInstance.get(`/users/${userId}/profile`);
  return response.data;
}

// 닉네임 or 이미지 or 둘다 수정
export async function updateProfile(userId, nickname, file) {
  try {
    const fd = new FormData();
    if (nickname) fd.append("nickname", nickname);
    if (file) fd.append("profile_image", file);

    const response = await axiosInstance.put(`/users/${userId}/profile`, fd, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}

// 회원 탈퇴
export async function deleteUser(userId) {
  try {
    const response = await axiosInstance.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}
