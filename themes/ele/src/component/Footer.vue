<template lang="html">
  <footer class="site-footer">
      <div class="wrapper-fit">
        <div class="footer-text">
          © 2017 Wang Shaohui
        </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'siteFooter'
}
</script>

<style lang="css">
.site-footer {
    border-top: 1px solid #E6E6E6;
    padding: 30px 0;
    background-color: #F9F9F9;
}

.wrapper-fit {
    max-width: -webkit-calc(800px - (30px * 2));
    max-width: calc(800px - (30px * 2));
    margin-right: auto;
    margin-left: auto;
    padding-right: 30px;
    padding-left: 30px;
}

.footer-text {
    font-size: 12px;
    color: #4B4B4B;
    text-align: center;
}
</style>
