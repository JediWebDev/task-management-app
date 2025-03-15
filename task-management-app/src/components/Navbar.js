"use client"; 

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 dark:bg-gray-800 text-white p-3 flex gap-4">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
      <Link href="/about" className="hover:underline">About</Link>
    </nav>
  );
}
