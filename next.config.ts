// import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/gsha22.github.io/' : '',
  basePath: isProd ? '/gsha22.github.io' : '',
  output: 'export'
};

export default nextConfig;