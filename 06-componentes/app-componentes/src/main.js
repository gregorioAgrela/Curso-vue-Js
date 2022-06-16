import Vue from 'vue'
import App from './App.vue'
import ButtonEnviar from './components/ButtonEnviar.vue'
import DatosUsuario from './components/DatosUsuario.vue'
Vue.component('enviar',ButtonEnviar);
Vue.component('App-datausuario',DatosUsuario)
new Vue({
  el: '#app',
  render: h => h(App)
})
