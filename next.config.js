/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  images: {
    loader: "custom",
  },
};

module.exports = nextConfig;
