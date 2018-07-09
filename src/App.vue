<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
// components
import QuoteCard from './components/quote-card/quote-card.component.vue';

export default {
  name: 'app',
  components: {
    QuoteCard
  }
}
</script>

<style>
@import url('../node_modules/@fortawesome/fontawesome-free/css/all.css');
body {
  background-color: maroon;
}
</style>
