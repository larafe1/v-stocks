import Vue from 'vue';

import App from './App.vue';
import vuetify from '@/plugins/vuetify';
import store from '@/store';
import BaseOutlineButton from '@/components/shared/BaseOutlineButton.vue';

Vue.config.productionTip = false;

Vue.component('BaseOutlineButton', BaseOutlineButton);

const app = new Vue({
  vuetify,
  store,
  render: (h) => h(App)
});

app.$mount('#app');
