"use client";

import { Loader2, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { KeyboardEvent, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isSearching, startTransition] = useTransition();
  const router = useRouter();

  const onSearch = () => {
    startTransition(() => {
      router.push(`/search?query=${query}`);
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }

    if (event.key === "Escape") {
      inputRef.current?.blur();
    }
  };

  return (
    <div className="w-full h-[50px]">
      <div className="relative w-full h-full">
        <Input
          disabled={isSearching}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => onKeyDown(e)}
          ref={inputRef}
          placeholder="search..."
          className="absolute inset-0 h-full"
        />
        <Button
          disabled={isSearching}
          variant={"default"}
          className="absolute inset-y-0 right-0 h-full rounded-l-none"
        >
          {isSearching ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Search className="w-4 h-4" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
