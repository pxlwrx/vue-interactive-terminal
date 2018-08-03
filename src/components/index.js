import Vue from 'vue'
import VueTerminal from './VueTerminal.vue'
import VueTerminalWindow from './VueTerminalWindow.vue'

const Components = {
  VueTerminal,
  VueTerminalWindow
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components