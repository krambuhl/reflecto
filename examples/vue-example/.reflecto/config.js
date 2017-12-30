const path = require('path')

module.exports = {
  // define components that can be used in the
  // reflecto application
  components: {
    ...require('reflecto-ui')
    // you can add custom components, they are just
    // vue components that are attached to a vuex store
    // console: require('reflect-console')
  }
}
