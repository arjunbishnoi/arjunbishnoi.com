import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const scriptSrcDirective = isProduction
  ? "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com"
  : "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com";
const connectSrcDirective = isProduction
  ? "connect-src 'self' https://formsubmit.co https://vitals.vercel-insights.com"
  : "connect-src 'self' ws://localhost:* ws://127.0.0.1:* http://localhost:* http://127.0.0.1:* https://formsubmit.co https://vitals.vercel-insights.com";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  scriptSrcDirective,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https:",
  connectSrcDirective,
  "form-action 'self' https://formsubmit.co",
].join("; ");

const globalSecurityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-site" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  ...(isProduction
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]
    : []),
] as const;

const resumeNoIndexHeaders = [
  {
    key: "X-Robots-Tag",
    value: "noindex, noarchive",
  },
] as const;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [...globalSecurityHeaders],
      },
      {
        source: "/resume",
        headers: [...resumeNoIndexHeaders],
      },
      {
        source: "/arjun-bishnoi-resume.pdf",
        headers: [...resumeNoIndexHeaders],
      },
      {
        source: "/Arjun-Bishnoi-Resume.pdf",
        headers: [...resumeNoIndexHeaders],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.arjunbishnoi.com' }],
        destination: 'https://arjunbishnoi.com/:path*',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/projects/:slug',
        destination: '/work/:slug',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/?section=contact',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/?section=about',
        permanent: true,
      },
      {
        source: '/blog/the-future-of-ui',
        destination: '/blog/the-future-of-ui-design-in-2026',
        permanent: true,
      },
      {
        source: '/blog/optimizing-react-performance',
        destination: '/blog/optimizing-react-rendering-at-scale',
        permanent: true,
      },
      {
        source: '/blog/building-for-accessibility',
        destination: '/blog/building-for-true-digital-accessibility',
        permanent: true,
      },
      {
        source: '/arjun-bishnoi-resume.pdf',
        destination: '/resume',
        permanent: true,
      },
      {
        source: '/Arjun-Bishnoi-Resume.pdf',
        destination: '/resume',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/arjun-bishnoi-resume.pdf',
      },
    ];
  },
};

export default nextConfig;
