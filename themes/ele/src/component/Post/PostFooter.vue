<template>
  <div class='post-footer'>
    <!-- <icon name='bars' class='icon icon-bars'></icon> -->
  </div>
</template>

<script>
require('styles/icon.less');
import $ from 'jquery';
import Icon from 'vue-awesome/components/Icon';

export default {
  name: 'PostFooter',

  components: {
    Icon
  },

  data() {
    return {
      as: 'a',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
