<style scoped lang="less">
  @import "./AnimateCard.less";
</style>

<template lang="html">
  <div class="animate-card">
    <div class="animate-card-contianer">
      <div class="animate-card-inner">
        <div class="animate-card-img">
          <img :src="cardImg" style="width: 80px;">
        </div>
        <p>{{ cardTitle }}</p>
      </div>

      <div class="animate-card-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'animateCard',

  props: {
    cardTitle: String,
    cardImg: String,
  },
}
</script>
