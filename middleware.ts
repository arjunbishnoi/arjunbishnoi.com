import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const apexHost = "arjunbishnoi.com";
const canonicalHost = "www.arjunbishnoi.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  if (host !== apexHost) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https";
  url.host = canonicalHost;

  return NextResponse.redirect(url, 308);
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
