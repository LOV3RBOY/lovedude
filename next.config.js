/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com']
  },
  output: 'export',
  distDir: 'out',
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      dns: false,
      tls: false,
      assert: false,
      crypto: false,
      http: false,
      https: false,
      stream: false,
      zlib: false
    }
    return config
  }
}

module.exports = nextConfig

