import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
// const API_URL = "http://127.0.0.1:8000/api/v1.0/";

// console.log(API_URL)

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default apiClient;
// api/v1.0/user
