import Vue from "vue";
import App from "./App.vue";
import PortalVue from "portal-vue";

Vue.use(PortalVue);
Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    getImageURL(path){
      return require('@/assets/' + path)
    }
  }
})


new Vue({
  render: (h) => h(App),
}).$mount("#app");
