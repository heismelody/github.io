import Vue from 'vue';

require('./styles/base.less');
import post from 'component/Post/Post';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import app from './app';
import blog from 'component/Blog';
import Welcome from 'component/Welcome/Welcome';
import VueRouter from 'vue-router';


const root = document.createElement('div');
root.setAttribute('id', 'app');
document.body.appendChild(root);

const routes = [
    { path: '/', component: Welcome },
    { path: '/blog', component: blog },
];

Vue.component('icon', Icon);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(app),
});


import { getPosts } from './lib/api.js';

getPosts(1);
