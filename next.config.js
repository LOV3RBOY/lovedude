/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  experimental: {
    appDir: true
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'three': require.resolve('three')
    }
    return config
  }
}

module.exports = nextConfig

