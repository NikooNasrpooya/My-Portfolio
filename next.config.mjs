/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Enables static export
  basePath: '/your-repo-name',  // Set the GitHub repo name as the base path
  images: {
    unoptimized: true,  // Disable Next.js Image Optimization for static export
  },
};

export default nextConfig;
