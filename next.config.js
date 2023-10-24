/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['external-content.duckduckgo.com', 'cdn.shopify.com'],
  },
}

module.exports = nextConfig
