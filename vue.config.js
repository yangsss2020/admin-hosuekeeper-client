const path = require('path')
// const data = require('./data.json')
// const info = data.info
// const goods = data.goods
// const ratings = data.ratings

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {

  // path
  devServer: {
    proxy: {
      '/api': {
        target: 'http://admin.yangsss.xyz/api', // 代理目标的基础路径
        ws: true,
        changeOrigin: true,
        pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
      },
      '/users': {
        target: 'http://admin.yangsss.xyz/users', // 代理目标的基础路径
        ws: true,
        changeOrigin: true,
        pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
          '^/users': ''
        }
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('components', resolve('src/components'))
      .set('styles', resolve('src/common/styles'))
      .set('home', resolve('src/page/Home'))
  },
  transpileDependencies: [ //echarts
    'vue-echarts',
    'resize-detector'
  ]
}
