<template>
  <Menu></Menu>
  <router-view/>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  name: 'App',
  props: {
    msg: String
  },
  components: {
    Menu
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
