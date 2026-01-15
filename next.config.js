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
  },
}

module.exports = nextConfig
