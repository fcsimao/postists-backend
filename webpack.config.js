const { lib } = require('serverless-webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {

  entry: lib.entries,
  target: 'node',
  devtool: 'source-map',
  externals: [nodeExternals()],
  mode: lib.webpack.isLocal ? 'development' : 'production',
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
      },
    ],
  },

}
