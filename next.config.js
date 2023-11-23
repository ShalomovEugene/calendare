/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "jsx", "js"],

  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
