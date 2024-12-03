/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    unoptimized: true
  },
  output: 'export',
  distDir: '.next',
  basePath: '',
  assetPrefix: '',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'three': require.resolve('three')
    }
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
      stream: false,
      http: false,
      https: false,
      zlib: false,
      'crypto-browserify': require.resolve('crypto-browserify'),
    }
    return config
  },
  experimental: {
    appDir: false
  },
  publicRuntimeConfig: {
    staticFolder: '/public',
  }
}

module.exports = nextConfig

