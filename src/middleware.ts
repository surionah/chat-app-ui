import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fallbackLanguage, languages } from "./app/i18n/settings";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

export function middleware(req: NextRequest) {
  const lng = fallbackLanguage;

  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  return NextResponse.next();
}
