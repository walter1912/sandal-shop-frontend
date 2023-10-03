/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'down-vn.img.susercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'routine.vn',
        port: '',
        pathname: '/media/catalog/product/**',
      },
    ],
  },
};

module.exports = nextConfig;
