import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '', // Leave empty for default ports (e.g., 443 for HTTPS)
        pathname: '/**', // Allow all paths under placehold.co
      },
    ],
  },
};

export default nextConfig;
