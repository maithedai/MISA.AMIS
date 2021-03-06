import Vue from 'vue';
import App from './App.vue';
import "./css/var-icon.scss";
import "./css/common.scss";
import store from "./store/index.js"
import 'devextreme/dist/css/dx.light.css';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
