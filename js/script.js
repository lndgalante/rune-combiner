new Vue({
  el: '#app',

  data: {
    search: '',
    runes: rune,
    runewords: runeword
  },

  methods: {

  }
})

var audio = new Audio('../mp3/greetings.mp3');
audio.play();