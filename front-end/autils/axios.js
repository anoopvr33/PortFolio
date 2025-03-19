import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://port-folio-b-ack.vercel.app",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default customAxios;
