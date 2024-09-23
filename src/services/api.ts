import { Todo } from "@/types/todo";
import axios from "axios";

const BASE_URL = "http://localhost:3001";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getTodosIds = async () => {
  return (await axiosInstance.get<Todo[]>("todos")).data.map((todo) => todo.id);
};
