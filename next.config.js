/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

intercept(interceptStdout);

module.exports = nextConfig;
