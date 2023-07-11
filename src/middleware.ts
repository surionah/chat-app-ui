import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fallbackLanguage } from "./app/i18n/settings";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

export function middleware(req: NextRequest) {
  const pathLanguage = req.nextUrl.pathname.match(/\/en|\/es/);
  if (!pathLanguage) {
    return NextResponse.redirect(
      new URL(`/${fallbackLanguage}${req.nextUrl.pathname}`, req.url)
    );
  }
  return NextResponse.next();
}
