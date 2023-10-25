/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "external-content.duckduckgo.com",
      "cdn.shopify.com",
      "images.unsplash.com",
      "nepcha.com",
    ],
  },
  experimental: {
    largePageDataBytes: 512000, // Set your desired threshold in bytes (e.g., 512 kB)
  },
};

module.exports = nextConfig;
