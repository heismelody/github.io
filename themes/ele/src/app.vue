<style scoped lang="less">
  .main {
    height: 100vh;
    background-size: cover;
    background-image: url('asset/image/galaxy-bg.jpg');
  }
</style>

<template lang="html">
  <div class="main">
    <welcome></welcome>
  </div>
</template>

<script>
import Welcome from 'component/Welcome/Welcome';

export default {
  name: 'app',

  components: {
    Welcome
  }
}
</script>
