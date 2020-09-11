<template>
  <ul>
    <Card v-for="user in users" v-bind:key="user.name" v-bind:user="user" />
  </ul>
</template>

<script>
import Card from './Card';

export default {
  name: 'Cards',
  components: {
    Card,
  },
  props: {
    users: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}
</style>
