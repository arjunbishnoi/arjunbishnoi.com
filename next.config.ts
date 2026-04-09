import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
