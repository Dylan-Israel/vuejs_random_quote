import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import QuoteCard from './components/quote-card/quote-card.component.vue';

// instantiation of depedencies
Vue.use(vueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [ 
    { path: '/test', component: QuoteCard}
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
