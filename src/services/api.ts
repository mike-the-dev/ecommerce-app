import { Login } from "@/types/login";
import axios from "axios";

const BASE_URL = "http://localhost:3001/api";
const axiosInstance = axios.create({ baseURL: BASE_URL });

// export const getTodosIds = async () => {
//   return (await axiosInstance.get<Todo[]>("todos")).data.map((todo) => todo.id);
// };

export const createUser = async (data: Login) => {
  return (await axiosInstance.post("loginUser", data, {
     withCredentials: true,
     headers: {
      "Content-type": "application/json"
     }
  }));
};
