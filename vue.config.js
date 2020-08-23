module.exports = {
    // 它支持webPack-dev-server的所有选项
    devServer: {
      host: "0.0.0.0",
      port: 8080, // 端口号
      https: false, // https:{type:Boolean}
      open: true, //配置自动启动浏览器
      // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
   
      // 配置多个代理
      proxy: {
        "/api": {
          target: "http://172.22.12.28:30083/",
          // target: "http://172.23.40.202:30083/",
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/'
          }
        }
      }
    },
    publicPath: './'
  };