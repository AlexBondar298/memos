import axios from "axios";
import { ItemsProps } from "@/types/types";

const api = axios.create({
  baseURL: "https://64f89d2c824680fd217fd692.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getMems = async () => {
  try {
    const response = await api.get("/memos");
    console.log("data", response.data);
    const rndLike = () => Math.floor(Math.random() * 100) + 1;
    const data = response.data.map((elem: ItemsProps) => ({
      ...elem,
      like: rndLike(),
    }));
    return data;
  } catch (error: any) {
    console.error("Помилка отримання мемів:", error);
    throw error;
  }
};
