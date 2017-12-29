const webpack = require('webpack')

module.exports = {
  resolve: {
    extensions: ['.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Vue: ['vue/dist/vue.esm.js', 'default']
    })
  ]
}
