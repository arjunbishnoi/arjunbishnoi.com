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
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/skills',
        destination: '/#skills',
        permanent: true,
      },
      {
        source: '/resume',
        destination: '/Resume - Arjun Bishnoi.pdf',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
