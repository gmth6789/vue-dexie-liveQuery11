<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <DBItems :prefix="prefix" msg="Hello Vue 3 in CodeSandbox!" />
</template>

<script>
import DBItems from "./components/DBItems.vue";
export default {
  name: "App",
  components: {
    DBItems: DBItems,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
