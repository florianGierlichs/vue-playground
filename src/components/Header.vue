<template>
  <header>
    <div>Logo</div>
    <nav>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    logo: String,
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  background-color: #333;
  color: white;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  > * {
    padding: 0 50px;
  }
}

ul {
  display: flex;
  list-style: none;
  > li {
    margin-right: 10px;
  }
}
</style>
