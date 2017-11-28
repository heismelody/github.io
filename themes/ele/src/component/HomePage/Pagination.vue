<style media="screen">
  .pagination {
    clear: both;
    margin: 1% 0;
    text-align: center;
  }

  .pagination li a {
    color: #7b7a7a;
    cursor: pointer;
    display: inline-block;
    font-size: 18px;
    padding: 3%;
    text-decoration: none;
  }
  .archive-pagination li {
    display: inline;
  }
  li {
    list-style-type: none;
  }

  .archive-pagination li a:hover,
  .archive-pagination .active a {
    color: #48a3a6;
  }
</style>

<template lang="html">
  <div class="archive-pagination pagination">
    <ul>
      <li v-show="current > 1" class="pagination-previous" @click='handleClickPrePage'>
        <a href="javascript:">« Prev Page</a>
      </li>

      <li>
        <a href="javascript:">{{ current }}</a>
      </li>

      <li v-if="current < total" class="pagination-next" @click='handleClickNextPage'>
        <a href="javascript:">Next Page »</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
  },
  data() {
    return {
      total: 10,
      current: 1,
    }
  },
  methods: {
    handleClickPrePage: function () {
      this.current = this.current - 1;
    },
    handleClickNextPage: function () {
      this.current = this.current + 1;
    }
  }
}
</script>
