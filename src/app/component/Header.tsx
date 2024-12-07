"use client";

import React from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link"; // Import Link from Next.js

const Header = () => {
  return (
    <nav className="bg-white text-black px-4 py-6 h-20 border-b-2">
      <div className="flex justify-between items-center ml-10">
        <div className="text-2xl font-bold">Exclusive</div>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400 transition">Home
          </Link>
          <Link href="/pages/about" className="hover:text-gray-400 transition">About
          </Link>
          <Link href="/pages/contact"  className="hover:text-gray-400 transition">Contact
          </Link>
          <Link href="/pages/signup"  className="hover:text-gray-400 transition">Sign Up
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="hidden sm:block w-40 md:w-60 bg-gray-200 text-black py-1 px-4 rounded-sm focus:outline-none focus:ring focus:ring-blue-600"
            />
            <FaSearch
              className="absolute top-2 right-2 text-gray-500 cursor-pointer"
              size={18}
            />
          </div>

          <div className="flex space-x-4">
      {/* Wishlist Icon */}
      <a 
        href="/pages/wishlist" 
        className="cursor-pointer hover:text-gray-600 transition"
        title="Wishlist"
      >
        <FaHeart size={20} />
      </a>

      {/* Shopping Cart Icon */}
      <a 
        href="/pages/cart" 
        className="cursor-pointer hover:text-gray-600 transition"
        title="Cart"
      >
        <FaShoppingCart size={20} />
      </a>

      {/* LinkedIn Icon */}
      <a 
        href="https://www.linkedin.com/in/hooria-fatima-54753927b/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="cursor-pointer hover:text-gray-600 transition"
        title="LinkedIn Profile"
      >
        <FaUser size={20} />
      </a>
    </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className="md:hidden mt-4 flex justify-between space-x-4">
        <Link href="/" className="hover:text-gray-300 transition">Home
        </Link>
        <Link href="/pages/about" className="hover:text-gray-300 transition">About
        </Link>
        <Link href="/pages/contact"className="hover:text-gray-300 transition">Contact
        </Link>
        <Link href="/pages/signup" className="hover:text-gray-300 transition">Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Header;
