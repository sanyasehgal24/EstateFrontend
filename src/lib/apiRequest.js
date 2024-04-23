import axios from "axios";

const apiRequest = axios.create({
  BASE_URL: "https://estatebackend-8.onrender.com",
  withCredentials: true,
});

export default apiRequest;