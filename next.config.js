const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: false,
  compress: true,
  optimization: {
    minimize: true,
  },
  experimental: {
    optimizePackageImports: [
      "xlsx",
      "react-icons",
      "react-slick",
      "slick - carousel",
    ],
  },
  productionBrowserSourceMaps: false,
  i18n,
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextConfig);
