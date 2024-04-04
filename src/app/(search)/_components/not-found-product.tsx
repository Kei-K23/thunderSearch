import { X } from "lucide-react";
import React from "react";

type NotFoundProductProps = {
  query: string;
};
const NotFoundProduct = ({ query }: NotFoundProductProps) => {
  return (
    <div className="text-center py-4 ">
      <h3 className="mt-2 text-sm font-semibold text-gray-900">No results</h3>
      <p className="mt-1 text-sm mx-auto max-w-prose text-gray-500">
        Sorry, we couldn&apos;t find any matches for{" "}
        <span className="text-green-600 font-medium">{query}</span>.
      </p>
    </div>
  );
};

export default NotFoundProduct;
