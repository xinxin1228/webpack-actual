const path = require('node:path')
const { merge } = require('webpack-merge')
const webpackCommConfig = require('./webpack.comm.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(webpackCommConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name][fullhash:8].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // 添加 autoprefixer 插件
                plugins: [require('autoprefixer')]
              }
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // 添加 autoprefixer 插件
                plugins: [require('autoprefixer')]
              }
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // 添加 autoprefixer 插件
                plugins: [require('autoprefixer')]
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name][fullhash:8].css'
    })
  ],
  optimization: {
    // 使用插件压缩代码
    minimize: true,
    // 提供一个或多个压缩插件，来对打包后的文件作相关压缩，不过会覆盖默认的插件
    // 也就是，这样设置后，CSS代码确实压缩，但是JS代码确没有被压缩了
    minimizer: [new CssMinimizerPlugin(), '...'],
    splitChunks: {
      cacheGroups: {
        chunks: 'all',
        // 抽离node_modules中的公共模块
        vendors: {
          test: /[\/]node_modules[\/]/,
          filename: 'vendors.[contenthash].js',
          priority: -10, // 设置优先级，确保先处理这个规则
          enforce: true,
          minChunks: 1
        },
        common: {
          chunks: 'all',
          priority: -20,
          filename: 'commons.[contenthash].js',
          minChunks: 2, //被至少2个chunk引/用时才会被提取
          reuseExistingChunk: true //如果模块已经被打包进某个chunk，则复用该chunk
        }
      }
    }
  },
  devtool: 'nosources-source-map'
})
