<template>
  <div id="app">
    <img src="./assets/logo.png">
    <VueTerminal
            class=""
            :lines="lines"
            :add-styled-markup=true
    ></VueTerminal>
  </div>
</template>

<script>

export default {
  data () {
    return {
      lines: [
        {type: 'input', content: '$ welcome to vue-terminal Demo!'},
        {type: 'input', content: '$ just add lines and they will be animated when yuo set the type prop to "input"'},
        {type: 'input', content: '$ want to simulate some Progress? just add a line with the type of "progress"'},
        {type: 'progress', progressBarCharacter: '*'},
        {type: 'progress', progressBarCharacter: '#'}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
