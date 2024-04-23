import axios from "axios";
const port = process.env.PORT || 5173;
const apiRequest = axios.create({
  BASE_URL: "https://estatebackend-8.onrender.com" || port,
  withCredentials: true,
});

export default apiRequest;