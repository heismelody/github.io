<style media="screen">
  .pagination {
    clear: both;
    margin: 1% 0;
    text-align: center;
  }

  .me-account {
    display: table;
    table-layout: fixed;
    margin-top: -95px;
  }

  .me-account-content {
    padding-top: 66px;
    vertical-align: top!important;
    width: 100%;
    display: table-cell;
  }

  .me-account-avatar {
    width: 200px;
    height: 200px;
    border: 14px solid #fff;
    margin-right: 0!important;
    line-height: 35px;
    vertical-align: middle;
    border-radius: 4px;
    overflow: hidden;
    float: left;
  }

  .me-account-avatar-img {
    max-height: 200px;
    max-width: 200px;
    width: 200px;
    height: 200px;
    border: none;
    padding: 0;
    border-radius: 4px;
  }

  .me-account-name {
    font-size: 25px;
    line-height: 35px;
    font-weight: 500;
  }
  .me-account-brief p {
    font-size: 15px;
    font-weight: 300;
    color: #666;
  }

  .me-account-lable p {
    color: #999;
    font-size: 13px;
    font-weight: 300;
  }

  .site-header {
    position: relative;
    z-index: 1;
  }

  .me-container {
    width: 800px;
    margin: auto;
    position: relative;
    z-index: 2;
  }
</style>

<template lang="html">
  <div class="me-account">
    <div class="me-account-inner">
      <div class="me-account-avatar">
        <img class="me-account-avatar-img" src="https://avatars2.githubusercontent.com/u/9329094?v=4&s=460">
      </div>
      <div class="me-account-content">
        <h1 class="me-account-name">asdfdfsfsf</h1>
        <h2 class="me-account-brief">
          <p>@sfd: sdfs</p>
        </h2>
        <div class="me-account-label">
          <p>A:ssdfs</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'meProfile',
}
</script>
