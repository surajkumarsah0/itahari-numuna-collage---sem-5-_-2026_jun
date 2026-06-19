import ProcuctCard from "@/components/ProductCard";
import getFakeStoreData from "@/lib/getFakestoreData";
import { notFound } from "next/navigation";

export default async function ProductsPage() {
  const datas: TypeProducts[] | null = await getFakeStoreData("/products");

  if (!datas || !datas.length) return notFound();

  return (
    <div>
      <h1>Product page</h1>

      {datas.map((data) => (
        <ProcuctCard key={data.id} data={data} />
      ))}
    </div>
  );
}
