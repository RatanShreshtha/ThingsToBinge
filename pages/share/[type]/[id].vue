<script setup lang="ts">
definePageMeta({
  middleware: ['validate-type']
});


const route = useRoute();
const { id, type } = route.params;

const content = await useContent(type, id);
</script>

<template>
  <section class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">Shared To You</h1>
      <p class="subtitle">This is a suggestion for you to binge on by someone.</p>
      <hr />
      
      <ContentDetailsCard :content="content" />
    </div>
  </section>
</template>
