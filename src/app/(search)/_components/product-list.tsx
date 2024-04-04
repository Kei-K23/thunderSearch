import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/db/schema";

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul className="py-4 rounded-b-md">
      {products.slice(0, 3).map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <li className="mx-auto py-4 flex space-x-4">
            <div className="relative flex items-center bg-zinc-100 rounded-lg h-40 w-40">
              <Image
                loading="eager"
                fill
                alt="product-image"
                src={`/${product.imageId}`}
              />
            </div>

            <div className="w-full flex-1 space-y-2 py-1">
              <h1 className="text-lg font-medium text-gray-900">
                {product.name}
              </h1>

              <p className="prose prose-sm text-gray-500 line-clamp-3">
                {product.description}
              </p>

              <p className="text-base font-medium text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ProductList;
