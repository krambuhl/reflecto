import createArchive from 'reflecto-vue/createArchive'

const fileContext = require.context('../source/', true, /(.vue|.md|.data.js)$/)

export default createArchive(fileContext)
