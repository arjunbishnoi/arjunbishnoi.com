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
  matcher: "/:path*",
};
