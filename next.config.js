/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s.gravatar.com', 'lh3.googleusercontent.com', 'api.time.com', 'aarp-content.brightspotcdn.com']
  }
}

module.exports = nextConfig
