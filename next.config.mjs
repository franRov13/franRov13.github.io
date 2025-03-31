// Note: Change file extension from .ts to .mjs for better compatibility

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
  // Add this to ensure correct trailing slashes
  trailingSlash: true,
};

export default nextConfig;