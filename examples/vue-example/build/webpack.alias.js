const path = require('path')
const source = (...paths) => path.resolve(__dirname, '../source', ...paths)

module.exports = {
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@shared': source('@shared'),
      '@identity': source('elements/identity'),
      '@tags': source('elements/tags'),
      '@components': source('elements/components'),
      '@pages': source('pages')
    }
  }
}
