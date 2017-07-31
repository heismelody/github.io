<style scoped lang="less">
  @import "./Welcome.less";
</style>

<template lang="html">
  <div class="welcome">
    <a class="welcome-avatar" href="/">
      <img src="https://avatars2.githubusercontent.com/u/9329094?v=4&s=460" alt="" />
    </a>
    <h1 class="welcome-name" style="font-family: PingFangSC-Regular">
      heismelody
    </h1>
    <div class="welcome-slogan">
      Welcome:)
    </div>

    <hr>

    <ul class="welcome-nav">
        <li class="welcome-item">
          <a href="/blog">Blog</a>
          <span>|</span>
        </li>
        <li class="welcome-item">
          <a href="https://github.com/heismelody" rel="noopener noreferrer" target="_blank">Wiki</a>
          <span>|</span>
        </li>
        <li class="welcome-item">
          <a href="https://github.com/heismelody" rel="noopener noreferrer" target="_blank">Github</a>
          <span>|</span>
        </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
}
</script>
