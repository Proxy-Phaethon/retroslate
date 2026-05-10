import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/products-services",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
