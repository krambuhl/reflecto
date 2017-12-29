const path = require('path')

module.exports = {
  projectRoot: path.resolve(__dirname, '../source'),

  // define plugins for framework integrations
  use: [
    require('reflecto-vue')
  ],

  // define components that can be used in the
  // reflecto application
  components: {
    ...require('reflecto-ui')
    // you can add custom components, they are just
    // vue components attaches to a vuex store
    // console: require('reflect-console')
  }
}
