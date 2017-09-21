var arr = require('../pages/router.js')
var fullpath = ''
var htmlconfig = arr.map(function (value) {
  fullpath = (value.path ? (value.path + '/') : '') + value.name
  return {
    filename: 'views/' + value.name + '.html',
    template: 'pages/' + fullpath + '.html',
    chunks: ['vendor', value.path],
    inject: true
  }
})
module.exports = htmlconfig
