import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/servicios", destination: "/capacidades", permanent: true },
      { source: "/metodologia", destination: "/modelo", permanent: true },
    ];
  },
};
export default nextConfig;
