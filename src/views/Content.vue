<template>
  <h1>Content {{ type }}</h1>
</template>

<script>
export default {
  name: "Content",
  computed: {
    type() {
      return this.$route.params.type;
    }
  }
};
</script>

<style></style>
