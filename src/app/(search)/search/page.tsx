import HeroSection from "@/components/hero-section";
import { redirect } from "next/navigation";
import React from "react";

type SearchPageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const SearchPage = ({ searchParams }: SearchPageProps) => {
  const query = searchParams.query;

  if (Array.isArray(query) || !query) {
    return redirect("/");
  }

  return (
    <div>
      <HeroSection />
      {query}
    </div>
  );
};

export default SearchPage;
