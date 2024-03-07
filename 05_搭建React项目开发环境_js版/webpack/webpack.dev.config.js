const { merge } = require('webpack-merge')
const webpackCommConfig = require('./webpack.comm.config')

module.exports = merge(webpackCommConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'eval-cheap-module-source-map'
})
