<template>
  <header-section v-if="!$route.path.includes('/products/')"></header-section>
  <router-view></router-view>
  <footer-section></footer-section>
  <shopping-cart-slider-modal></shopping-cart-slider-modal>
</template>

<script>
import FooterSection from './components/FooterSection.vue';
import HeaderSection from './components/HeaderSection.vue';
import ShoppingCartSliderModal from './components/ShoppingCartSliderModal.vue';

export default {
  name: 'App',
  components: {
    HeaderSection,
    FooterSection,
    ShoppingCartSliderModal,
  }
}
</script>

<style>
@import './assets/css/font-awesome.min.css';
@import './assets/css/bootstrap-grid.css';
@import './assets/css/bootstrap-grid.min.css';
@import './assets/css/bootstrap-reboot.min.css';
@import './assets/css/bootstrap.min.css';
@import './assets/css/animate.min.css';
@import './assets/css/style.css';
@import './assets/css/slick.css';
/* @import './assets/css/responsive.css'; */
@import './assets/css/normalize.css';
@import './assets/css/nice-select.css';
/* @import './assets/css/meanmenu.css'; */
@import './assets/css/font-awesome.min.css';
/* @import './assets/css/default-skin.css'; */
@import './assets/css/cochin.css';
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap&subset=latin-ext');
@import url('https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,700i,900&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800,800i&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
