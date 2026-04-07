import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl;
  const shouldStripTrailingSlash = pathname !== "/" && pathname.endsWith("/");

  // Canonicalize host to apex domain to avoid duplicate home-page variants.
  if (hostname === "www.arjunbishnoi.com") {
    const url = request.nextUrl.clone();
    url.hostname = "arjunbishnoi.com";

    if (shouldStripTrailingSlash) {
      url.pathname = pathname.replace(/\/+$/, "");
    }

    return NextResponse.redirect(url, 308);
  }

  // Strip trailing slashes (except root "/") to prevent duplicate URLs
  // e.g. /projects/ → /projects, /skills/ → /skills
  if (shouldStripTrailingSlash) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/\/+$/, "");
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - \.(?:svg|png|jpg|jpeg|gif|webp)$ (images)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
