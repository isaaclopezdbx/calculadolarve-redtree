import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
 theme : {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#382933',
        secondary: '#519872',
        accent: '#3b5249',
        error: '#cf1b1b',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
});
