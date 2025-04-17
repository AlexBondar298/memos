import DefaultLayout from "@/layouts/default";

import { title } from "@/components/primitives";
import ListMem from "@/components/ListMem";

export default function CardsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-7xl text-center justify-center">
          <h1 className={title()}>Card Memos</h1>
          <ListMem />
        </div>
      </section>
    </DefaultLayout>
  );
}
