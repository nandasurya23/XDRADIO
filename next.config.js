/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    hydrate: false
  },
  images: {
    domains: [
      'res.cloudinary.com'
    ]
  }
};




module.exports = nextConfig;
