import { apiRequest } from "./apiRequest";

export async function fetchPostList(params) {
  return apiRequest("/posts", {
    method: "GET",
    params,
  });
}

export async function fetchPostDetail(postId, userId) {
  const params = userId ? { userId } : undefined;
  return apiRequest(`/posts/${postId}`, { params });
}

export async function deletePostApi(postId) {
  return apiRequest(`/posts/${postId}`, { method: "DELETE" });
}

export async function createPostApi(userId, formData) {
  return apiRequest(`/posts/${userId}`, {
    method: "POST",
    body: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export async function updatePostApi(postId, formData) {
  return apiRequest(`/posts/${postId}`, {
    method: "PUT",
    body: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
}
