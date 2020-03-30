<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footbar />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footbar from "@/components/Footbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footbar
  }
};
</script>
<style></style>
