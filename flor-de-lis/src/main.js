
import Vue from 'vue';
import App from './App.vue';
import router from './router';  // Aqui você importa o router configurado em router/index.js

Vue.config.productionTip = false;

// Instancia o Vue, passando o router como opção
new Vue({
  render: h => h(App),
  router,  // O router é passado aqui
}).$mount('#app');
