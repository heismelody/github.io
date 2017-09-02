<style media="screen">
  .container {
      background-color: #fff;
      padding: 50px;
  }

  @media (min-width: 480px) {
    .categories-container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        width: 100%;
    }
  }

  .categories-container {
    margin: auto;
    max-width: 980px;
    padding: 60px;
    text-align: center;
  }

  .categories-container-outer {
    background-color: #fff;
  }
</style>

<template lang="html">
  <div class="categories-container-outer">
    <div class="categories-container">
      <animate-card
        card-img='https://avatars2.githubusercontent.com/u/9329094?v=4&s=460'
        card-title='Avatar'
      >
      </animate-card>
      <animate-card
        card-img='https://avatars2.githubusercontent.com/u/9329094?v=4&s=460'
        card-title='Avatar'
      >
      </animate-card>

      <animate-card
        card-img='https://avatars2.githubusercontent.com/u/9329094?v=4&s=460'
        card-title='Avatar'
      >
      </animate-card>
      <animate-card
        card-img='https://avatars2.githubusercontent.com/u/9329094?v=4&s=460'
        card-title='Avatar'
      >
      </animate-card>
      <animate-card
        card-img='https://avatars2.githubusercontent.com/u/9329094?v=4&s=460'
        card-title='Avatar'
      >
      </animate-card>

      <animate-card
        card-img='https://avatars2.githubusercontent.com/u/9329094?v=4&s=460'
        card-title='Avatar'
      >
      </animate-card>
      <animate-card
        card-img='https://avatars2.githubusercontent.com/u/9329094?v=4&s=460'
        card-title='Avatar'
      >
      </animate-card>
      <animate-card
        card-img='https://avatars2.githubusercontent.com/u/9329094?v=4&s=460'
        card-title='Avatar'
      >
      </animate-card>
      <animate-card
        card-img='https://avatars2.githubusercontent.com/u/9329094?v=4&s=460'
        card-title='Avatar'
      >
      </animate-card>
    </div>
  </div>
</template>
<script>
import siteHeader from 'component/Header';
import siteFooter from 'component/Footer';
import animateCard from 'component/Common/AnimateCard';
import paperCard from 'component/Common/PaperCard';

export default {
  name: 'Categories',

  components: {
    siteFooter,
    siteHeader,
    paperCard,
    animateCard
  }
}
</script>
