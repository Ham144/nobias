/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com"
      }
    ]
  }
}

module.exports = nextConfig
