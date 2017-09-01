<style media="screen">
  .me-container {
      background-color: #fff;
      padding: 50px;
  }
</style>

<template lang="html">
  <div class="me-container">
    <me-profile></me-profile>
    <paper-card>
      sdfsdfs
    </paper-card>

    <paper-card>
      sdfsdfs
    </paper-card>

    <paper-card>
      sdfsdfs
    </paper-card>

    <paper-card>
      sdfsdfs
    </paper-card>
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
