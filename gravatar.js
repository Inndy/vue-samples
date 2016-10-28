Vue.component('gravatar', {
  template: '#gravatar',
  props: {
    email: { type: String },
    size: {
      type: Number,
      default: 240
    }
  },
  computed: {
    hash: function () {
      return md5(this.email)
    },
    url: function () {
      return "https://gravatar.com/avatar/" + this.hash + "?s=" + this.size
    }
  }
})

Vue.component('user', {
  template: '#user',
  props: [ 'user' ]
})

new Vue({
  el: '#app',
  data: {
    users: [
      { name: 'Inndy', email: 'inndy.tw@gmail.com', intro: 'This is Inndy speaking.' },
      { name: 'RSChiang', email: 'ren.chiang@gmail.com', intro: '左手 Code 右手 Code' },
      { name: 'Viktor', email: 'asfgjk123123@gmail.com', intro: '你好我是哲學系管院學代' },
      { name: '文月', email: 'requiem.for.memories@gmail.com', intro: '（・∀・）我吃八盤' },
    ]
  }
})
