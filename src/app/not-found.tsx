import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col space-y-4">
      <h2 className="text-4xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
