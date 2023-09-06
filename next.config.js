const config = require("./src/config/config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: config.base_path !== "/" ? config.base_path : "",
  trailingSlash: config.site.trailing_slash,
  output: 'standalone',
  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
  //typescript: {
  //  ignoreBuildErrors: true,
  //},
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
