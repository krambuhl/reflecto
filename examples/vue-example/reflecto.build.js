const path = require('path')
const merge = require('webpack-merge')
const reflectoConfig = require('reflecto-webpack/build')
const frameworkConfig = require('reflecto-vue/webpack.config')
const aliasConfig = require('./build/webpack.alias')

module.exports = merge(reflectoConfig, frameworkConfig, aliasConfig, {
  output: {
    path: path.resolve(__dirname, '.dist')
  },
  entry: {
    archive: path.resolve(__dirname, '.reflecto/archive.js')
  }
})
