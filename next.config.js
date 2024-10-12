/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true,
    images: {
    unoptimized: true,
      domains: ["snucaligraphy.s3.ap-northeast-2.amazonaws.com"],
    },
  };
  
  module.exports = nextConfig;