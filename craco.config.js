const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, 'src/assets/')
    },
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  },
};