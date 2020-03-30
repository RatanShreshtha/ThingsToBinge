<template>
  <h1>Details</h1>
</template>

<script>
export default {
  name: "Details",
  computed: {
    type() {
      return this.$route.params.type;
    },
    name() {
      return this.$route.params.name;
    }
  }
};
</script>

<style></style>
