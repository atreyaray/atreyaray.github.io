/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static exports for GitHub Pages
  // For username.github.io repositories, basePath should be empty
  basePath: '',
  images: {
    unoptimized: true, // Required for static exports
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // This adds the trailing slash to match GitHub Pages serving behavior
  trailingSlash: true,
};

export default nextConfig;
