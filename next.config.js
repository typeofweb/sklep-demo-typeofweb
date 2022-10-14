/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ['naszsklep-api.vercel.app', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
