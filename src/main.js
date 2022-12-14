import Vue from 'vue'
import App from './App.vue'
import{BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueScrollReveal from 'vue-scroll-reveal';
import AOS from "aos";
import 'aos/dist/aos.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueScrollReveal);

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1800,
  scale: 1,
  distance: '100px',
});


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

new Vue({
  created(){
    AOS.init();
  },
  render: h => h(App)
}).$mount('#app')
