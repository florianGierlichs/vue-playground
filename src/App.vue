<template>
  <div id="app">
    <Header logo="Logo" />
    <Cards v-bind:users="users" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Cards from './components/Cards';
const axios = require('axios');

export default {
  name: 'App',
  components: {
    Header,
    Cards,
  },
  data() {
    return {
      users: [
        { name: 'John', age: 28, favoriteFood: 'Pizza' },
        { name: 'Jane', age: 24, favoriteFood: 'Pasta' },
        { name: 'Fritz', age: 32, favoriteFood: 'Sushi' },
        { name: 'Anna', age: 28, favoriteFood: 'Salat' },
      ],
    };
  },
  // mounted () {
  //   axios
  //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     .then(response => (this.info = response))
  // }
};
</script>

<style></style>
