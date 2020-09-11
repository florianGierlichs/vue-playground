import Vue from 'vue';
import App from './App.vue';
import { VueEmotion } from '@egoist/vue-emotion';
import './styles.scss';

Vue.config.productionTip = false;
Vue.use(VueEmotion);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
