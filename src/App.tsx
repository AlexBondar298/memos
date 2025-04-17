import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import TablePage from "@/pages/table";
import CardsPage from "@/pages/cards";

import { useCookies } from "react-cookie";
import { CookieProps } from "./types/types";

import { getMems } from "./config/memApi";

function App() {
  const [cookies, setCookie] = useCookies<"listData", CookieProps>([
    "listData",
  ]);

  useEffect(() => {
    if (!cookies?.listData) {
      const fetchData = async () => {
        try {
          const data = await getMems();
          setCookie("listData", JSON.stringify(data), {
            path: "/",
          });
        } catch (e) {
          console.error("Помилка завантаження мемів");
        }
      };

      fetchData();
    }
  }, []);

  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<TablePage />} path="/table" />
      <Route element={<CardsPage />} path="/cards" />
    </Routes>
  );
}

export default App;
