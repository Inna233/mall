/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "bos-merchant-images.s3-us-west-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
