/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/mcp/asset/**',
      },
    ],
    // Local images will be automatically optimized to WebP/AVIF
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85],
  },
}

module.exports = nextConfig
