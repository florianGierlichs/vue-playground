<template>
  <div id="app">
    <Header logo="Logo" />
    <Cards v-bind:users="users" />
    <Form />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Cards from './components/Cards';
import Form from './components/Form';
const axios = require('axios');

export default {
  name: 'App',
  components: {
    Header,
    Cards,
    Form,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    axios
      .get(
        'https://my-json-server.typicode.com/florianGierlichs/vue-playground/users'
      )
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        this.users = response;
        return this.users;
      });
  },
};
</script>

<style></style>
