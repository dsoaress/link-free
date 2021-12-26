/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['./src/**/*']
  },
  images: {
    domains: ['ucarecdn.com']
  }
}
