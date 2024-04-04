import HeroSection from "@/components/hero-section";
import { db } from "@/db";
import { Product, productsTable } from "@/db/schema";
import { embedding } from "@/lib/embedding";
import { Index } from "@upstash/vector";
import { sql } from "drizzle-orm";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";
import NotFoundProduct from "../_components/not-found-product";
import ProductList from "../_components/product-list";

export const metadata: Metadata = {
  title: `Search`,
};

type SearchPageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const index = new Index<Product>();

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const query = searchParams.query;

  if (Array.isArray(query) || !query) {
    return redirect("/");
  }

  const products = await db
    .select()
    .from(productsTable)
    .where(
      sql`to_tsvector('simple', lower(${productsTable.name} || ' ' || ${
        productsTable.description
      })) @@ to_tsquery('simple', lower(${query
        .trim()
        .split(" ")
        .join(" & ")}))`
    )
    .limit(3);

  // perform semantic query
  if (products.length < 3) {
    const vector = await embedding(query);

    if (vector.length <= 0) {
      return;
    }
    const res = await index.query({
      topK: 5,
      vector,
      includeMetadata: true,
    });

    const vectorProducts = res
      .filter((p) => {
        if (products.some((product) => product.id === p.id) || p.score < 0.9) {
          return false;
        } else {
          return true;
        }
      })
      .map(({ metadata }) => metadata!);

    products.push(...vectorProducts);
  }

  return (
    <div className="px-4">
      <HeroSection />
      <div className="max-w-[600px] mx-auto">
        {products.length <= 0 && <NotFoundProduct query={query} />}
        {products.length > 0 && <ProductList products={products} />}
      </div>
    </div>
  );
};

export default SearchPage;
