import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueChatScroll from 'vue-chat-scroll';
import { VueTypedJs } from 'vue-typed-js';
import VueCompositionApi from '@vue/composition-api';
import VueRouter from 'vue-router'
import router from './router/router'

Vue.use(VueChatScroll);
Vue.use(VueTypedJs);
Vue.use(VueCompositionApi);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
