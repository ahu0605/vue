const path = require('path')
const root = path.resolve(__dirname, '..') // 项目的根目录绝对路径
	
module.exports = {
  entry: path.join(root, 'src/main.js'),  // 入口文件路径
  output: {
    path: path.join(root, 'dist'),  // 出口目录
    filename: 'build.js'  // 出口文件名
  },
  resolve: {
    alias: {// 配置目录别名
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('src')
    },
    extensions: ['*', '.js', '.vue'],// 引用js和vue文件可以省略后缀名
    modules: [__dirname, 'node_modules'] // 找不到的模块会尝试在这个数组的目录里面再寻找
  },
  resolveLoader: {
     modules: [__dirname, 'node_modules'],// 找不到的loader模块会尝试在这个数组的目录里面再寻找
     moduleExtensions: [ '-loader' ]
  },
  module: { // 配置loader
     rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve('src'), path.resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
        
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader'
      
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  }
}