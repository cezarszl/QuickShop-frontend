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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-400">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white transition-opacity duration-300 hover:opacity-70"
        >
          <Link href={`/product/${product.id}`}>
            <div className="relative">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent text-white">
                <p className="text-sm font-semibold">From ${product.price}</p>
                <h3 className="text-lg font-bold">{product.name}</h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
