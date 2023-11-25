import ProductItem from "@/components/ProductItem";

export default async function Home() {
  const api = process.env.DATA_API || "";
  const res = await fetch(api);
  const repo = await res.json();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {repo &&
        repo.merchandises.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
  );
}
