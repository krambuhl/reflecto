const path = require('path')
const merge = require('webpack-merge')
const reflectoConfig = require('reflecto-webpack/dev')
const frameworkConfig = require('reflecto-vue/webpack.config')
const aliasConfig = require('./build/webpack.alias')

module.exports = merge(frameworkConfig, reflectoConfig, aliasConfig, {
  entry: {
    archive: path.resolve(__dirname, '.reflecto/archive.js')
  }
})
