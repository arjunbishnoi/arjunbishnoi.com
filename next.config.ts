import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
    ];
  },
  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/Arjun-Bishnoi-Resume.pdf',
      },
    ];
  },
};

export default nextConfig;
