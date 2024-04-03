import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <Image src={"/thunder.png"} alt="thunder img" width={80} height={80} />
      <h1 className="bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-semibold mt-2">
        ThunderSearch
      </h1>
      <p className="font-bold text-muted-foreground max-w-[600px] mt-3">
        This is full text search engine that capable for accurate and enhance
        search results with semantically.
      </p>
    </div>
  );
};

export default HeroSection;
