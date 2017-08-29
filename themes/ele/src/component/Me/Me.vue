<style media="screen">
  .container {
      background-color: #fff;
      padding: 50px;
  }
</style>

<template lang="html">
  <div class="aaa">
    <site-header></site-header>
    <div class="container">
      <me-profile></me-profile>
      <paper-card>
        sdfsdfs
      </paper-card>
    </div>
    <site-footer></site-footer>
  </div>
</template>
<script>
import siteHeader from 'component/Header';
import siteFooter from 'component/Footer';
import meProfile from 'component/Me/MeProfile';
import paperCard from 'component/Common/PaperCard';

export default {
  name: 'me',

  components: {
    siteFooter,
    siteHeader,
    meProfile,
    paperCard,
  }
}
</script>
