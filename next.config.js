const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const path = require('path')

//配置路径别名 alias
const nextConfig = {
  webpack: (config, options) => {
    config.resolve.alias["renderer"] = path.resolve(__dirname, "./renderder-process")
    return config
  }
}

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
}]], nextConfig)
