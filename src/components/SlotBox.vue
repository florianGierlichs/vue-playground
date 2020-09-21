<template>
  <div class="container">
    <slot name="boxText">
      <p>Dieser Text ist der Fallback für diese Box.</p>
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
  margin: 3px;
  background-color: chocolate;
  display: inline-block;
}
</style>
