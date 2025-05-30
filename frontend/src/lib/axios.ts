import axios from "axios";

const getBackendUrl = () => {
  if (typeof window === "undefined") {
    return process.env.BACKEND_URL;
  }
  return process.env.NEXT_PUBLIC_BACKEND_URL;
};

const api = axios.create({
  baseURL: getBackendUrl() + "/api",
});

export default api;
