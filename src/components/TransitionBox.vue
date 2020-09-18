<template>
  <transition name="move-box" appear>
    <div v-on:click="test" v-if="boxState" class="box">transition</div>
  </transition>
</template>

<script>
export default {
    data() {
    return {
      boxState: true,
    };
  },
  methods: {
      test() {
          this.boxState = !this.boxState;
          setTimeout(() => this.boxState = !this.boxState, 2000)
      }
  }
};
</script>

<style lang="scss" scoped>
.box {
  margin: 50px;
  width: 100px;
  height: 100px;
  background-color: darkseagreen;
  &:hover {
      color: ghostwhite;
  }
}

.move-box-enter,
.move-box-leave-to {
    background-color: red;
}

.move-box-enter-to {
    background-color: deepskyblue;
}

.move-box-enter-active,
.move-box-leave-active {
  transition: all 1000ms ease-out;
}
</style>
