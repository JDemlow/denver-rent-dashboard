"use client";
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

        {/* Links - Shown on larger screens */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Trends
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Submit Rent
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center mt-4 md:hidden">
          <li className="py-2">
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:underline">
              Trends
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:underline">
              Submit Rent
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
