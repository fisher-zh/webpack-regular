import Regular from 'regularjs'

var app = new Regular({
  template: '<div>webpack45</div>',
  data: {
    name: 'zfx'
  }
})
app.$inject('#app')
if(module.hot) {
  // accept update of dependency
  module.hot.accept()
}