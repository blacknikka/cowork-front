<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view />
  </div>
</template>

<script>
import HeaderBar from '@/components/parts/HeaderBar';

export default {
  name: 'App',
  components: {
    HeaderBar,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}
</style>
