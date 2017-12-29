
module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue']
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.js$/, loader: 'babel-loader?cacheDirectory=true', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
}
