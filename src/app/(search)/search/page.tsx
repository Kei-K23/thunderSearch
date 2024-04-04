import HeroSection from "@/components/hero-section";
import { db } from "@/db";
import { productsTable } from "@/db/schema";
import { sql } from "drizzle-orm";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: `Search`,
};

type SearchPageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

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

  return (
    <div>
      <HeroSection />
      <pre>{JSON.stringify(products)}</pre>
    </div>
  );
};

export default SearchPage;
