<script setup lang="ts">
import useSuggestion from '~~/composables/useSuggestion';
import useContent from '~~/composables/useContent';

definePageMeta({
  middleware: ['validate-type', 'validate-genre']
});

const route = useRoute();
const { genre, type } = route.params;

const id = await useSuggestion(genre, type);
const content = await useContent(type, id);
</script>

<template>
  <section class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">{{ genre }} {{ type }}</h1>
      <p class="subtitle">This is our suggestion for {{ genre.toLocaleLowerCase() }} {{ type }} to binge on.</p>
      <hr />

      <ContentDetailsCard :content="content" />
    </div>
  </section>
</template>
