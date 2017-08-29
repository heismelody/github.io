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
      <li class="pagination-previous">
        <a href="">« Prev Page</a>
      </li>
      <li>
        <a href="">1</a>
      </li>
      <li class="active" aria-label="Current page">
        <a href="">2</a>
      </li>
      <li>
        <a href="">3</a>
      </li>
      <li>
        <a href="">4</a>
      </li>
      <li class="pagination-omission">…</li>
      <li>
        <a href="">6</a>
      </li>
      <li class="pagination-next">
        <a href="">Next Page »</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pagination',

  data() {
    return {
      as: 'a',
    }
  },
}
</script>
