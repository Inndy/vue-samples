Vue.component('hello', {
  template: '#hello',
  props: {
    name: {
      type: String,
      default: "World"
    }
  }
})

new Vue({
  el: '#app'
})
