
'use strict'	//严格模式
const path = require('path')
module.exports = {
  // 构建产品时使用的配置
  build: {
    // 环境变量
    env: require("./prod.env"),
    index: path.resolve(
      __dirname,
      "../dist/index.html"
    ), // 编译输入的 index.html 文件
    assetsRoot: path.resolve(__dirname, "../dist/"), // 编译输出的静态资源路径
    assetsSubDirectory: "static", // 编译输出的二级目录
    assetsPublicPath: "/", // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
    productionSourceMap: true, // 是否开启 cssSourceMap
    productionGzip: false, // 是否开启 gzip压缩
    productionGzipExtensions: ["js", "css"], // 需要使用 gzip 压缩的文件扩展名
    bundleAnalyzerReport: process.env.npm_config_report
  },


  dev: {
    env: require("./dev.env"),
    port: process.env.PORT || 8099,
    autoOpenBrowser: true,
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
        '/api': {
          //target: 'http://121.199.43.7:4001',// 接口的域名
          target: 'http://121.199.43.7:9092', // 接口的域名
          // secure: false,  // 如果是https接口，需要配置这个参数
          changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
          pathRewrite: {
            '^/api': '/'
          }
        }

    },

    cssSourceMap: false
  }
};

