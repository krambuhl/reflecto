import createArchive from 'reflecto-vue/createArchive'

const requireAll = (context, prefixLength) =>
  context.keys()
    .reduce((list, path) => {
      const module = context(path)
      list[path.substr(2)] = module.default || module
      return list
    }, {})

const fileContext = require.context('../source/', true, /(.vue|.md|.data.js)$/)

export default createArchive(requireAll(fileContext))
