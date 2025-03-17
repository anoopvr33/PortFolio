import axios from "axios";

const customAxios = axios.create({
  baseURL: import.meta.env.Base_URL,
  // baseURL: "http://localhost:3400/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default customAxios;
