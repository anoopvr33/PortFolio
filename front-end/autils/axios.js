import axios from "axios";

const customAxios = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default customAxios;
