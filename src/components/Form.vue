<template>
  <div>
    <input />
    <ButtonCustom v-on:click="handleClick" color="mediumspringgreen"
      >mediumspringgreen</ButtonCustom
    >
    <ButtonCustom v-on:click="handleClick" color="tomato">tomato</ButtonCustom>
  </div>
</template>

<script>
import { ButtonCustom } from './ButtonCustom';

export default {
  name: 'Form',
  components: {
    ButtonCustom,
  },
  methods: {
    handleClick(e) {
      e.preventDefault();
      alert(e.target.innerText);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 10px;
}
</style>
