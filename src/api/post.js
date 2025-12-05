import axiosInstance from "./axiosInstance";

export async function fetchPostList(params) {
  try {
    const res = await axiosInstance.get("/posts", { params });
    return res.data; // message, data
  } catch (err) {
    console.error("게시글 목록 조회 실패:", err);
    throw err;
  }
}
