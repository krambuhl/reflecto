const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    library: 'ElementArchive', // export the archive to the window
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.json', '.md']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'lib/renderer-template.html'),
      filename: 'render.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'lib/app-template.html'),
      filename: 'index.html',
      inject: true
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.js$/, loader: 'babel-loader?cacheDirectory=true', exclude: /node_modules/ },
      { test: /.md$/, loader: 'raw-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
}
