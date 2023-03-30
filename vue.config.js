const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // hot: true,
    host: 'localhost',
    port: 8080,
    open: true, // 浏览器自动打开
  },
  lintOnSave: false, // 关闭eslint代码检查工具
})
