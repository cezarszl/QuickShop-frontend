import { Product } from "@/stores/productStore";

async function getProduct(id: string): Promise<Product> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${baseUrl}/product/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  return res.json();
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md p-4 rounded-lg">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-yellow-500 text-2xl font-semibold">
          ${product.price}
        </p>
        {/* You can add more product details here like description, reviews, etc. */}
      </div>
    </div>
  );
}
