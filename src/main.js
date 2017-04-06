import babelpolyfill from 'babel-polyfill';
import Vue from 'vue'
import App from './App'
import { Toast,Indicator,MessageBox} from './components/common.js';

import VueRouter from 'vue-router'
import routes from './routes';
import store from './store';
import 'mint-ui/lib/style.css'
import './css/reset.css';
/*import Mock from './mock';
Mock.bootstrap();*/

Vue.use(VueRouter)

const router = new VueRouter({
	//mode: 'history',
  routes
})
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.innerText
    el.remove()
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router
})
