import axiosInstance from "./axiosInstance";

export async function apiRequest(url, options = {}) {
  try {
    const isFormData = options.body instanceof FormData;
    const defaultHeaders = isFormData
      ? {}
      : {
          "Content-Type": "application/json",
        };

    const response = await axiosInstance({
      url,
      method: options.method || "GET",
      data: options.body || null,
      params: options.params || null,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    return {
      ok: true,
      data: response.data.data,
      message: response.data.message,
      status: response.status,
    };
  } catch (error) {
    return {
      ok: false,
      data: null,
      message: error.response?.data?.message ?? "server_error",
      status: error.response?.status ?? 500,
    };
  }
}
