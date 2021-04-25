import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

const theme = {
  primary: colors.deepOrange,
}

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: 'sm'
  },
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
});
