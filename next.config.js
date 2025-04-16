/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["codewarranty.s3.us-west-1.amazonaws.com"], // Domain only, no protocol
    domains: ['images.unsplash.com'],

  },
};

module.exports = nextConfig;
