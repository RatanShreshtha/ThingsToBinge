<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footbar />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footbar from '@/components/Footbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footbar
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Nova+Mono&display=swap');
#app {
  font-family: 'Nova Mono', monospace;
}
</style>
