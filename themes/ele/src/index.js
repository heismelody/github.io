import Vue from 'vue';

require('./styles/base.less');
import post from 'component/Post/Post';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import app from './app';
import about from 'component/About/About';
import me from 'component/Me/Me';
import blog from 'component/Blog';
import Categories from 'component/Categories/Categories';
import Welcome from 'component/Welcome/Welcome';
import VueRouter from 'vue-router';


const root = document.createElement('div');
root.setAttribute('id', 'app');
document.body.appendChild(root);

const routes = [
    { path: '/', component: Welcome },
    { path: '/blog', component: blog },
    { path: '/me', component: me },
    { path: '/about', component: about },
    { path: '/categories', component: Categories },
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
