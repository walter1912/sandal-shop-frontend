// 'use client'
import axios from "axios";
import { getLocalStorage } from "./localStorage";

const axiosInstance = axios.create({
  // withCredentials: false,
  // process.env.BASE_API_URL ||
  baseURL: process.env.HOST_API,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const access_token = getLocalStorage("access_token");
    if (access_token && config && config.headers) {
      config.headers.Authorization = "Bearer " + access_token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

axiosInstance.interceptors.response.use(
  (res) => res,
  async (err) => {
    return Promise.reject(err.response);
  }
);

export default axiosInstance;
