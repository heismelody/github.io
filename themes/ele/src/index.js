import Vue from 'vue';

import post from 'component/Post/Post';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import Welcome from 'component/Welcome/Welcome';

const routes = {
  '/': Welcome,
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
