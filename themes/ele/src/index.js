import Vue from 'vue';

require('./styles/base.less');
import post from 'component/Post/Post';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import app from './app';

const routes = {
  '/': app,
};

Vue.component('icon', Icon);

let root = document.createElement('div');

root.setAttribute('id','app');
document.body.appendChild(root);

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
