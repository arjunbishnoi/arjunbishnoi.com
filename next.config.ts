import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/resume',
        destination: '/Arjun-Bishnoi-Resume.pdf',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
