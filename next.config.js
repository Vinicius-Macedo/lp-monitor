/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  trailingSlash: true,
  assetPrefix: "./",
  images: {
    loader: "custom",
  },
};

module.exports = nextConfig;
