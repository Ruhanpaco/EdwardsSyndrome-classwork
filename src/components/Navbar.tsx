"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Daily Life", href: "/daily-life" },
    { title: "Support", href: "/support" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl md:text-2xl font-light text-[#1a1a1a]"
            >
              Edwards<span className="text-[#FF6B6B]">Syndrome</span>
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-[#666666] hover:text-[#1a1a1a] transition-colors duration-300"
              >
                {item.title}
              </Link>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1a1a1a] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-[#666666] hover:text-[#1a1a1a] transition-colors duration-300 px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
} 