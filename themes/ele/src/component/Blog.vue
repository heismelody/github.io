<template lang="html">
  <div class="aaa">
    <site-header></site-header>
    <div class="container">
      <post-box></post-box>
      <post-box></post-box>
      <post-box></post-box>
      <post-box></post-box>
      <post-box></post-box>
      <post-box></post-box>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import siteFooter from 'component/Footer';
import siteHeader from 'component/Header';
import postBox from 'component/HomePage/PostBox';

export default {
  name: 'blog',

  components: {
    siteFooter,
    siteHeader,
    postBox
  }
}
</script>

<style lang="css">
body {
    font-family: 'Cutive Mono', monospace;
    font-size: 16.5px;
    line-height: 1.5;
    color: #2D2D2D;
    background-color: #F9F9F9;
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: 100%;
}
</style>
