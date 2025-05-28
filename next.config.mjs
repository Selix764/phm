/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [
      'i.ytimg.com',
      'img.youtube.com',
      'i.imgur.com',
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'yt3.ggpht.com',
      'yt3.googleusercontent.com',
      'v0.blob.com',
      'images.unsplash.com',
      'blob.v0.dev'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
  },
}

export default nextConfig
