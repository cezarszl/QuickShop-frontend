"use client";
import { useEffect } from "react";
import { useProductStore } from "../stores/productStore";
import Link from "next/link";

const ProductGrid = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md p-4 rounded-lg">
          <Link href={`/product/${product.id}`}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-yellow-500 font-bold">{product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
