const resolve = dir => require('path').join(__dirname, dir)

console.log('-----------------')
console.log(resolve('../'))

module.exports = {
  configureWebpack: {
    resolve: {
      //  修改图片引用路径
      // alias: {
      //   // 'static': resolve('../static')
      // }
    },
    // output:{
    //   publicPath: resolve('static')
    // },
    // devServer: {
    //   publicPath: resolve('../static'),
    //   proxy: [{
    //     context: ['/static', '/api'],
    //     target: 'http://localhost:8080/static',
    //   }]
    // }
  }
}
