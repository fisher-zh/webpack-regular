var arr = require('../src/router.js')
var fullpath = ''
var htmlconfig = arr.map(function (value) {
  fullpath = (value.path ? (value.path + '/') : '') + value.name
  return {
    filename: 'views/' + value.name + '.html',
    template: 'src/pages/' + fullpath + '.html',
    chunks: ['vendor', value.name],
    inject: true
  }
})
module.exports = htmlconfig
