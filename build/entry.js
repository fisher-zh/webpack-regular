var arr = require('../src/router.js')
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'

var entry = {}
var fullpath = ''
for (var i = 0; i < arr.length; i++) {
  fullpath = (arr[i].path ? (arr[i].path + '/') : '') + arr[i].name
  // 在生产环境关闭hmr
  if (process.env.NODE_ENV === 'production') {
    entry[arr[i].name] = ['./src/pages/' + fullpath]
  } else {
    entry[arr[i].name] = ['./src/pages/' + fullpath, hotMiddlewareScript]
  }
  fullpath = ''
}
// console.log(entry)
module.exports = entry
