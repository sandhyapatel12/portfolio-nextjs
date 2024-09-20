/** @type {import('next').NextConfig} */
const nextConfig = {
  //access other sites images
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com', 'plus.unplash.com'],
  },
  //access static folder for resume
  publicRuntimeConfig: {
    staticFolder: 'public',
  },
};

export default nextConfig;
