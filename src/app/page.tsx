import HeroSection from "@/components/hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="px-4">
      <HeroSection />
    </main>
  );
}
