import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, isValidLocale } from "./lib/i18n";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip static files and api
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  if (isValidLocale(maybeLocale)) {
    // Already has valid locale
    return NextResponse.next();
  }

  // No locale: redirect to default or prefer browser language
  const preferred = request.headers.get("accept-language");
  let locale = defaultLocale;
  if (preferred) {
    const first = preferred.split(",")[0]?.toLowerCase();
    if (first?.startsWith("en")) locale = "en";
    if (first?.startsWith("tr")) locale = "tr";
  }
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
