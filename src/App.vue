<template>
  <div id="app">
   <Quote-Card></Quote-Card>
  </div>
</template>

<script>
// components
import QuoteCard from './components/quote-card/quote-card.component.vue';

// dependencies
import Vue from 'vue';
import vueResource from 'vue-resource';

// instantiation of depedencies
Vue.use(vueResource);

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
