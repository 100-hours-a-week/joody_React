export function formatDate(dateTime) {
  const date = new Date(dateTime);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")} ${String(
    date.getHours()
  ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

export const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000).toFixed(0) + "k";
  if (num >= 1000) return Math.floor(num / 1000) + "k";
  return num;
};

export const formatImageUrl = (url) => {
  if (!url) return "/img/default_profile.png"; // 기본 이미지 처리

  // 이미 절대경로라면 그대로 반환
  if (url.startsWith("http")) return url;

  // 상대경로라면 서버 prefix 붙이기
  return `http://localhost:8080${url}`;
};
