/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove deprecated options
  output: 'standalone',
  
  // Image optimization
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Enable experimental features if needed
  experimental: {
    // Remove turbo config as it's now stable
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: 'custom-value',
  },
};

export default nextConfig;
