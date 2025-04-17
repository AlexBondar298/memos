import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import TableMem from "@/components/TableMem";

export default function TablePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-7xl text-center justify-center">
          <h1 className={title()}>Table Memos</h1>
          <TableMem />
        </div>
      </section>
    </DefaultLayout>
  );
}
