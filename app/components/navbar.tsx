"use client";

import { useState } from "react";
import Link from "next/link";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md fixed w-full top-0 left-0 z-10 bg-black border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-white">
          borakaanaras
        </Link>

        {/* Menü butonu (mobilde görünür) */}
        <button
          className="md:hidden text-white text-lg px-3 py-2 border border-gray-700 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menü (masaüstünde görünür) */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li><Link href="/" className="hover:text-gray-400 transition">Anasayfa</Link></li>
          <li><Link href="/aboutme" className="hover:text-gray-400 transition">Hakkımda</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400 transition">İletişim</Link></li>
          <li><Link href="/projects" className="hover:text-gray-400 transition">Projeler</Link></li>
        </ul>
      </div>

      {/* Mobil menü */}
      {isOpen && (
        <ul className="md:hidden bg-black border-t border-gray-800 text-center">
          <li className="py-2"><Link href="/" className="block hover:bg-gray-900 text-white" onClick={() => setIsOpen(false)}>Anasayfa</Link></li>
          <li className="py-2"><Link href="/aboutme" className="block hover:bg-gray-900 text-white" onClick={() => setIsOpen(false)}>Hakkımda</Link></li>
          <li className="py-2"><Link href="/contact" className="block hover:bg-gray-900 text-white" onClick={() => setIsOpen(false)}>İletişim</Link></li>
          <li className="py-2"><Link href="/projects" className="block hover:bg-gray-900 text-white" onClick={() => setIsOpen(false)}>Projeler</Link></li>
        </ul>
      )}
    </nav>
  );
}
