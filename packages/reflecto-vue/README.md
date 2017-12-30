# reflecto-vue

Contiains helpers for working with vue projects.

## Modules

### createArchive (fileObject)

Helper for creating an reflect archive from a object of filename and file content pairs.

```js
const createArchive = require('reflecto-vue/createArchive')
const fileContext = require.context('../source/', true, /(.vue|.md|.data.js)$/)

export default createArchive(fileContext)
```

### renderComponent (el, component, options)

Function for rendering a component in an element

```js
const renderComponent = require('reflecto-vue/renderComponent')
```

### webpack.config

Contains webpack definition for vue projects

```js
const webpackConfig = require('reflecto-vue/webpack.config')
```

## How to install

With npm, do:

```
npm install reflecto-ui --save-dev
```
