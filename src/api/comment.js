import { apiRequest } from "./apiRequest";

export async function fetchComments(postId) {
  return apiRequest(`/posts/${postId}/comments`);
}

export async function createComment(postId, userId, text) {
  return apiRequest(`/posts/${postId}/comments/${userId}`, {
    method: "POST",
    body: JSON.stringify({ content: text }),
  });
}

export async function editComment(postId, commentId, text) {
  return apiRequest(`/posts/${postId}/comments/${commentId}`, {
    method: "PUT",
    body: JSON.stringify({ content: text }),
  });
}

export async function deleteComment(postId, commentId) {
  return apiRequest(`/posts/${postId}/comments/${commentId}`, {
    method: "DELETE",
  });
}
