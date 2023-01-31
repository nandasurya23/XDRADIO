/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    hydrate: false
  },
};
const images = {
  domains: ["ik.imagekit.io/lshkgi0dm/*"],
};



module.exports = nextConfig;
