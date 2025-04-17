import { useCallback } from "react";
import { useCookies } from "react-cookie";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";

import EditButton from "@/components/EditMemModal";
import { ItemsProps, CookieProps } from "@/types/types";

export const columns = [
  { name: "ID", uid: "id" },
  { name: "Ім'я", uid: "name" },
  { name: "Посилання", uid: "url" },
  { name: "Лайки", uid: "like" },
  { name: "ACTIONS", uid: "actions" },
];

export default function TableMem() {
  const [cookies] = useCookies<"listData", CookieProps>(["listData"]);
  const items: ItemsProps[] = Array.isArray(cookies.listData)
    ? cookies.listData
    : [];
  const renderCell = useCallback((mem: ItemsProps, columnKey: React.Key) => {
    const cellValue = mem[columnKey as keyof ItemsProps];

    switch (columnKey) {
      case "id":
        return <span>{mem.id}</span>;
      case "name":
        return <span>{mem.name}</span>;
      case "url":
        return (
          <span className="text-[10px] md:text-[12px] lg:text-[14px] line-clamp-2 max-w-[600px] break-all">
            {mem.url}
          </span>
        );
      case "like":
        return <span className="flex justify-center">{mem.like}</span>;
      case "actions":
        return (
          <span className="text-lg text-danger cursor-pointer active:opacity-50">
            <EditButton {...mem} />
          </span>
        );

      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            className="text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] px-2 py-2"
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item: ItemsProps) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell className="text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] px-2 py-2">
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
