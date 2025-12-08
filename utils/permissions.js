export function canEditPost(authorId) {
  return String(authorId) === String(localStorage.getItem("userId"));
}

export function canEditComment(authorId) {
  return String(authorId) === String(localStorage.getItem("userId"));
}
