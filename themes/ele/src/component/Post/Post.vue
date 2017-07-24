<style scoped lang="less">
  @import "./Post.less";
</style>

<template>
  <div class="post-main">
    <post-menu></post-menu>

    <post-content></post-content>

    <post-footer></post-footer>
  </div>
</template>

<script>
import PostMenu from 'component/Post/PostMenu';
import PostContent from 'component/Post/PostContent';
import PostFooter from 'component/Post/PostFooter';

export default {
  name: 'Post',

  components: {
    PostMenu,
    PostContent,
    PostFooter
  }
}
</script>
