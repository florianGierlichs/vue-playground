<template>
  <div id="app">
    <Header logo="Logo" />
    <Cards v-bind:users="users" />
    <Form />
    <TransitionBox />
    <SlotBox />
    <SlotBox>
      <template #boxText>
        <h3>Das ist der übergebene slot Text.</h3>
      </template>
    </SlotBox>
    <SlotBox>
      <!-- Funktioniert so nicht: -->
      <h3>Diese Box wird als Child übergeben.</h3>
      <!-- --- -->
    </SlotBox>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Cards from './components/Cards';
import Form from './components/Form';
import TransitionBox from './components/TransitionBox';
import SlotBox from './components/SlotBox';
const axios = require('axios');

export default {
  name: 'App',
  components: {
    Header,
    Cards,
    Form,
    TransitionBox,
    SlotBox,
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
