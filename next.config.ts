/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  /** Common settings for all environments */
  images: {
    unoptimized: true,
  },

  ...(process.env.NODE_ENV === 'production' ? {
    /** Production/Deployment settings (for Github Pages) */
    output: 'export',
    trailingSlash: true,
  } :
                                              {})
};

export default nextConfig;