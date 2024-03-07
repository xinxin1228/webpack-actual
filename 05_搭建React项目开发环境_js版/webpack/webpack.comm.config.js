const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.(jpe?g|png|gif|webp|svg)$/i,
        type: 'asset',
        generator: {
          filename: 'images/[hash][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 10KB 小于10k的直接转base64
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ],
  cache: {
    type: 'filesystem'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  }
}
