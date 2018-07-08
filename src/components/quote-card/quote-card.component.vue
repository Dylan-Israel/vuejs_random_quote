<template src='./quote-card.component.html'></template>
<style src='./quote-card.component.css'></style>

<script>
import QuoteIcon from "../quote-icon/quote-icon.component.vue";
import { Quote } from './models/quote.model.js';

export default {
  name: "Quote-Card",
  data() {
    return {
      newQuote: 'New Quote',
      quote: {
        quote: '',
        author: ''
      }
    };
  },
  components: {
    QuoteIcon
  },
  props: {
    className: {
      type: String,
      default: "fab fa-twitter-square fa-2x"
    }
  }, 
  methods: {
    getQuote: async function() {
      const response = await this.$http.get('https://talaikis.com/api/quotes/random/');
      const json = await response.json();
      const quote = new Quote(json);

      this.quote = quote;
    }
  },
     created: function() {
       this.getQuote();
    },
};
</script>