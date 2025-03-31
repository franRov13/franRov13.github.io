/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  // Common settings for all environments
  images: {
    unoptimized: true,
  },

  ...(process.env.NODE_ENV === 'production' ? {
    // Production/deployment settings (for GitHub Pages)
    output: 'export',
    basePath: '/portfolio',
    trailingSlash: true,
  } :
                                              {})
};

export default nextConfig;