import { apiRequest } from "./apiRequest";

export async function fetchPostList(params) {
  return apiRequest("/posts", {
    method: "GET",
    params,
  });
}
