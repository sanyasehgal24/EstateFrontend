import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://estatebackend-8.onrender.com",
  withCredentials: true,
});

export default apiRequest;