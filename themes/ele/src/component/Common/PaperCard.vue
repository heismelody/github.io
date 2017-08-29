<style media="screen">
  .paper {
    padding: 28px;
    border: 1px solid #e7e9eb;
    border-radius: 3px;
  }
</style>

<template lang="html">
  <div class="paper">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'PaperCard',
}
</script>
