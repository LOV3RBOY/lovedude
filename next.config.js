/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    unoptimized: true
  },
  output: 'export',
  distDir: '.next',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'three': require.resolve('three')
    }
    return config
  },
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig

