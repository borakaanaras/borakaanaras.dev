"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

const navLabels: Record<Locale, { home: string; about: string; contact: string; projects: string }> = {
  tr: { home: "Anasayfa", about: "Hakkımda", contact: "İletişim", projects: "Projeler" },
  en: { home: "Home", about: "About", contact: "Contact", projects: "Projects" },
};

export default function Navbar({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const labels = navLabels[locale];
  // Aynı sayfayı diğer dilde aç: /tr/aboutme -> /en/aboutme
  const pathWithoutLocale = pathname?.replace(/^\/(tr|en)/, "") || "";
  const trHref = `/tr${pathWithoutLocale}`;
  const enHref = `/en${pathWithoutLocale}`;

  const translateIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
    </svg>
  );

  return (
    <nav className="shadow-md fixed w-full top-0 left-0 z-10 bg-black border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={`/${locale}`} className="text-xl font-semibold text-white shrink-0">
          borakaanaras
        </Link>

        <ul className="hidden md:flex items-center space-x-6 text-white list-none m-0 p-0">
          <li className="shrink-0"><Link href={`/${locale}`} className="hover:text-gray-400 transition">{labels.home}</Link></li>
          <li className="shrink-0"><Link href={`/${locale}/aboutme`} className="hover:text-gray-400 transition">{labels.about}</Link></li>
          <li className="shrink-0"><Link href={`/${locale}/contact`} className="hover:text-gray-400 transition">{labels.contact}</Link></li>
          <li className="shrink-0"><Link href={`/${locale}/projects`} className="hover:text-gray-400 transition">{labels.projects}</Link></li>
          <li className="shrink-0 ml-1">
            <Link
              href={locale === "tr" ? enHref : trHref}
              className="inline-flex items-center justify-center p-1.5 rounded text-gray-400 hover:text-sky-400 hover:bg-gray-800/50 transition-colors"
              title={locale === "tr" ? "Switch to English" : "Türkçe'ye geç"}
              aria-label={locale === "tr" ? "Switch to English" : "Switch to Turkish"}
            >
              {translateIcon}
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-white text-lg px-3 py-2 border border-gray-700 rounded shrink-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-black border-t border-gray-800 text-center list-none m-0 p-0">
          <li className="py-2"><Link href={`/${locale}`} className="block hover:bg-gray-900 text-white" onClick={() => setIsOpen(false)}>{labels.home}</Link></li>
          <li className="py-2"><Link href={`/${locale}/aboutme`} className="block hover:bg-gray-900 text-white" onClick={() => setIsOpen(false)}>{labels.about}</Link></li>
          <li className="py-2"><Link href={`/${locale}/contact`} className="block hover:bg-gray-900 text-white" onClick={() => setIsOpen(false)}>{labels.contact}</Link></li>
          <li className="py-2"><Link href={`/${locale}/projects`} className="block hover:bg-gray-900 text-white" onClick={() => setIsOpen(false)}>{labels.projects}</Link></li>
          <li className="py-2 border-t border-gray-800">
            <Link
              href={locale === "tr" ? enHref : trHref}
              className="inline-flex items-center justify-center gap-2 py-2 text-sky-400 hover:bg-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {translateIcon}
              <span>{locale === "tr" ? "English" : "Türkçe"}</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
