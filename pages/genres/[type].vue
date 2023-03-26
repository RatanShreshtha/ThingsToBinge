<script setup>
definePageMeta({
  validate: (route) => {
    // Check if the type is either movie or tv
    return /movie|tv/.test(route.params.type);
  }
});

const route = useRoute();
const type = route.params.type;

const { data: genres } = await useFetch(`/api/genres/${type}`);
</script>

<template>
  <section class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">{{ type }} genres</h1>
      <p class="subtitle">
        Lets keep you entertained by suggesting {{ type }} content to binge on from folowing genres at random.
      </p>
      <hr />

      <div class="columns is-multiline">
        <div
          v-for="genre in genres"
          :key="genre.id"
          class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd"
        >
          <GenreCard :type="type" :genre="genre" />
        </div>
      </div>
    </div>
  </section>
</template>
