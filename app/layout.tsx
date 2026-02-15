import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "borakaanaras",
  description: "my portfolio website with nextjs",
  other: { "color-scheme": "dark" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
