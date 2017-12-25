const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const root = path.resolve(__dirname, '..')
const HtmlWebpackPlugin = require('html-webpack-plugin')
	
module.exports = merge(baseConfig, {
 plugins: [
    new HtmlWebpackPlugin({
      template: path.join(root, 'index.html'), // 模板文件
      inject: 'body' // js的script注入到body底部
    })
  ]
})