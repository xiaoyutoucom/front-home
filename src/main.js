import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import Layout from './components/Layout.vue';
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(Layout)
});
