import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.200/ehliyet/api",
});
export default axiosInstance;

