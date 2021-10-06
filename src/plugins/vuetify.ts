import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        brownLighter: '#5B5656',
        greenLighter: '#0B8457',
        brownDarker: '#4D4646',
        pinkLighter: '#F037A5',
        redLighter: '#EA5455',
        background: '#F2F3F5'
      }
    },
    options: {
      customProperties: true
    }
  }
});
