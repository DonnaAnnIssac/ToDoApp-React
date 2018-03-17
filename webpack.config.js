const webpack = require('webpack')
const path = require('path')
const BUILD_DIR = path.resolve(__dirname, 'src/client/public')
const APP_DIR = path.resolve(__dirname, 'src/client/app')
// const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader'
        }
      }
    //   {
    //     test: /\.html$/,
    //     use: [
    //       {
    //         loader: 'html-loader',
    //         options: {minimize: true}
    //       }
    //     ]
    //   }
    ]
  }
//   plugins: [
//     new HTMLWebPackPlugin({
//       template: './src/client/index.html',
//       filename: './index.html'
//     })
//   ]
}
