import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  output: 'exports',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  basePath: '/<your-repo-name>',
  assetPrefix: '/<your-repo-name>/',
};

export default nextConfig;
