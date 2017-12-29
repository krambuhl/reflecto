const getProp = require('get-value')

module.exports = (Handlebars) => {
  Handlebars.registerHelper('reflecto', ({ hash, data }) => {
    const plugins = Object.keys(hash).map((key) => {
      const value = hash[key]
      const match = value.match(/{{\s*[\w.]+\s*}}/g)
      const valueString =
        match
          ? match
            .map((x) => x.match(/[\w.]+/)[0])
            .reduce((value, x) => {
              const regex = new RegExp(`{{${x}}}`, 'gi')
              return value.replace(regex, getProp(data, x))
            }, value)
          : value

      return `reflecto-${key}=${valueString}`
    })

    return new Handlebars.SafeString(`<div ${plugins.join(' ')}></div>`)
  })
}
