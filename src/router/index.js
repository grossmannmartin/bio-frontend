import Vue from 'vue';
import Router from 'vue-router';
import Articles from '../components/Articles';
import SingleArticleById from '../components/SingleArticleById';
import SingleArticleByTag from '../components/SingleArticleByTag';

Vue.use(Router);

const routes = [
  {path: '/', component: SingleArticleByTag, props: {tag: 'homepage'}},
  {path: '/about', component: SingleArticleByTag, props: {tag: 'about'}},
  {path: '/articles', component: Articles, props: {tag: 'article'}},
  {path: '/article/:id', component: SingleArticleById, props: true},
];

export default new Router({
  routes,
  linkExactActiveClass: 'active',
  mode: 'history',
});
