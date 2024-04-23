import axios from "axios";
// const port = process.env.PORT || 5173;
const apiRequest = axios.create({
  baseURL: "https://estatebackend-po3p.onrender.com",
  withCredentials: true,
});

export default apiRequest;