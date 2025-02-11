"use client"; // ✅ Fix for using useState

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-300 p-4 bg-white dark:bg-gray-900">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Denver Rent Dashboard</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/trends" className="hover:underline">
              Trends
            </Link>
          </li>
          <li>
            <Link href="/submit" className="hover:underline">
              Submit Rent
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center mt-4 md:hidden">
          <li className="py-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link href="/trends" className="hover:underline">
              Trends
            </Link>
          </li>
          <li className="py-2">
            <Link href="/submit" className="hover:underline">
              Submit Rent
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
