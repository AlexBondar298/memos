import { useCookies } from "react-cookie";

import { ItemsProps, CookieProps } from "@/types/types";

import CardItem from "@/components/CardMem";

export default function ListMem() {
  const [cookies] = useCookies<"listData", CookieProps>(["listData"]);
  const items: ItemsProps[] = Array.isArray(cookies.listData)
    ? cookies.listData
    : [];
  return (
    <div className="grid gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {items.map((elem: ItemsProps, index: number) => (
        <CardItem key={index} {...elem} />
      ))}
    </div>
  );
}
