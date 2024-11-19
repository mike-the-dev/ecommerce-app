import { Login } from "@/types/login";
import axios from "axios";

// const BASE_URL = "http://localhost:3001/api";
const BASE_URL = "https://ecommerceapi.joymd.com/api";
const axiosInstance = axios.create({ baseURL: BASE_URL });

// export const getTodosIds = async () => {
//   return (await axiosInstance.get<Todo[]>("todos")).data.map((todo) => todo.id);
// };

export const getAuthenticated = async () => {
  return (await axiosInstance.get("authenticated", {
    withCredentials: true,
    headers: {
      "Content-type": "application/json"
    }
  })).data;
};

export const createUser = async (data: Login) => {
  return (await axiosInstance.post("loginUser", data, {
     withCredentials: true,
     headers: {
      "Content-type": "application/json"
     }
  }));
};
