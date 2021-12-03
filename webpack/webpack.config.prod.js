const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const path = require('path');
const rootDir = process.cwd();
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].chunk.js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
});
