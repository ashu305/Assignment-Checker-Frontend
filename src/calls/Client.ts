import axios from "axios";

const client = axios.create({
  baseURL: "https://stupefied-kalam-472325.netlify.app",
  timeout: 10000,
});
export default client;
