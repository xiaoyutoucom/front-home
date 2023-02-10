import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import Layout from './components/Layout.vue';
// 导入axios 没有./  (axios网络请求工具:1不依赖dom,2.前后端都可以用,3. 丰富拦截,扩展功能,4可封装,复用性强)
import axios from 'axios';
// 挂载到vue的全局(原型上),在每个组件都可以使用 ,prototype是固定的,$axios是自定义的
Vue.prototype.$axios = axios;
// 指定默认的请求域名
axios.defaults.baseURL = "http://localhost:8081/"
// 给每个请求拦截一下,添加请求Token信息
// axios.interceptors.request.use(function(config){
//     config.headers.Authorization = 'Bearer '+localStorage.getItem("token");
//     return config;
// })
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(Layout)
});
router.afterEach((to,from,next) => {

window.scrollTo(0,0);

// 或

// window.scroll(0, 0);

});



router.afterEach((to,from,next) => {

document.body.scrollTop =0;

document.documentElement.scrollTop = 0;

});
