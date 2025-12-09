import axios from "axios";

let isRefreshing = false;
let refreshSubscribers = [];

function onRefreshed(newToken) {
  refreshSubscribers.forEach((cb) => cb(newToken));
  refreshSubscribers = [];
}

function addRefreshSubscriber(callback) {
  refreshSubscribers.push(callback);
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

// ===== 요청 인터셉터 =====
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ===== 응답 인터셉터 =====
axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const { response, config } = error;

    if (!response) return Promise.reject(error);

    // 401 발생 → 토큰 재발급 시도
    if (response.status === 401 && !config._retry) {
      config._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const refreshRes = await axios.post(
            "http://localhost:8080/auth/refresh",
            null,
            { withCredentials: true }
          );

          const newToken = refreshRes.data.data.accessToken;
          localStorage.setItem("access_token", newToken);

          isRefreshing = false;
          onRefreshed(newToken);
        } catch (refreshError) {
          isRefreshing = false;
          localStorage.clear();
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      }

      return new Promise((resolve) => {
        addRefreshSubscriber((newToken) => {
          config.headers.Authorization = `Bearer ${newToken}`;
          resolve(axiosInstance(config));
        });
      });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
