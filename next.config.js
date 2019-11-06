const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
module.exports = withPlugins([[withCSS, {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  devIndicators: {
    autoPrerender: false,
  }
}], [withSass, {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
}]])