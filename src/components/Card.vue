<template>
  <li v-bind:user="user">
    <div class="userInfo">{{ user.name }}</div>
    <div class="userInfo">{{ user.age }}</div>
    <div class="userInfo">{{ user.favoriteFood }}</div>
  </li>
</template>

<script>
export default {
  name: 'Card',
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  padding: 20px;
  margin: 20px;
  background-color: lightgray;
}

.userInfo {
  margin: 5px;
}
</style>
