import axios from "axios";
// const port = process.env.PORT || 5173;
const apiRequest = axios.create({
  baseURL: "https://estatebackend-1.onrender.com/server",
  
  // baseURL: "http://localhost:8800/server",
  
  //withCredentials: true,
  headers: {
    'Authorization': localStorage.getItem("usertoken"), 
  }
});

export default apiRequest;