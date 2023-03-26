<script setup>
definePageMeta({
  validate: (route) => {
    // Check if the type is either movie or tv
    return /movie|tv/.test(route.params.type);
  }
});

const route = useRoute();
const { genre, type } = route.params;

const { data: content } = await useFetch(`/api/suggestion/${genre}/${type}`, {
  initialCache: false
});
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
