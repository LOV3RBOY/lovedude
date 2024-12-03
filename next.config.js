/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'three': require.resolve('three')
    }
    return config
  },
  experimental: {
    appDir: true
  },
  distDir: '.next',
  generateBuildId: async () => {
    return 'build-13.4.19'
  }
}

module.exports = nextConfig

