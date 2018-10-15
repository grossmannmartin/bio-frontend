import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Hello from './components/HelloWorld';
import About from './components/About';
import Article from './components/Article';

Vue.use(VueRouter);
const routes = [
  {path: '/', component: Hello},
  {path: '/about', component: About},
  {path: '/article/:id', component: Article, props: true},
];

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history',
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router,
}).$mount('#app');
