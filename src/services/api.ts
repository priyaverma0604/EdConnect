// src/services/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/", // Django server URL
});

export default api;
