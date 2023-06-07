const path = require('path')

module.exports = {
  modules: [path.join(__dirname, '..', 'src'), path.join(__dirname, '..', 'node_modules')],
  extensions: ['.ts', '.tsx', '.js'],
  alias: {
    '@app': path.resolve(__dirname, '..', 'src'),
    '@components': path.resolve(__dirname, '..', 'src/components/'),
    '@styles': path.resolve(__dirname, '..', 'src/styles/'),
    '@context': path.resolve(__dirname, '..', 'src/context/'),
    '@utilities': path.resolve(__dirname, '..', 'src/utilities'),
  },
}
