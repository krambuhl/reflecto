const Vue = require('vue')

module.exports = (el, component) => {
  if (el._vm) {
    el._vm.$destroy(true)
    el._vm.$el.remove()
    el._vm = null
  }

  const container = document.createElement('div')
  el.appendChild(container)
  el._vm = new Vue({
    el: container,
    render: typeof component === 'function'
      ? component
      : h => h(component)
  })
}
