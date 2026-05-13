import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE==="development" ? "https://quicktalk-r7ki.onrender.com/api" : "/api",
  withCredentials: true,
});
