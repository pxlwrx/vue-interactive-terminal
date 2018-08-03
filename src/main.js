import Vue from 'vue'
import App from './App.vue'

import VueTerminal from './components/VueTerminal.vue'
import VueTerminalWindow from './components/VueTerminalWindow.vue'

const Components = {
  VueTerminal,
  VueTerminalWindow
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
