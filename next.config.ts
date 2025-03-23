import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["media.cecotec.cloud", "media-pre.cecotec.cloud"],
  },
};

export default nextConfig;
