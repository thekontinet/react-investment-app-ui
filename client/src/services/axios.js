import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000/api/",
  timeout: 30000,
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
});

export default api;
