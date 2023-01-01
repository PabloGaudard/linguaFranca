const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost'
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('node-sass'),
      },
    },
  },
})
