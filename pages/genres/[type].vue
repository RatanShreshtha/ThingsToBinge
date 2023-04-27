<script setup>
import useGenres from '~~/composables/useGenres';

definePageMeta({
  middleware: ['ip-geo-location', 'validate-type']
});

const route = useRoute();
const type = route.params.type;

const genres = await useGenres(type);
</script>

<template>
  <section class="hero-body">
    <div class="container is-fluid has-text-centered">
      <h1 class="title is-1">{{ type }} genres</h1>
      <p class="subtitle is-3">
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
