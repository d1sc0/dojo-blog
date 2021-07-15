<template>
  <Nav />
  <router-view/>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  components: { Nav },
  data() {
  return {
    }
  }
}

</script>
<style>
@import './assets/styles.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';

body {
  height: 100vh;
}
</style>
