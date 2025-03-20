/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static exports for GitHub Pages
  // Adjust the following based on your repository name
  // For username.github.io repositories, you can leave basePath as ''
  // For project repositories (username.github.io/repo-name), use '/repo-name'
  basePath: '/personal-website',
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
