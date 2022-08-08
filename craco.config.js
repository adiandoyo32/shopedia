const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, './src/assets'),
      "@models": path.resolve(__dirname, './src/models')
    },
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
    plugins: [
      // new BundleAnalyzerPlugin()
    ]
  },
};