const requireAll = (context) => context.keys().map(context)

require('@styles/root.css')
requireAll(require.context('@styles/', true, /\.css/))

require('@app/app')
