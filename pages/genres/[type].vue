<script setup>
definePageMeta({
  validate: async (route) => {
    // Check if the type is either movie or tv
    return /movie|tv/.test(route.params.type)
  }
})

const route = useRoute()
const type = route.params.type

const { data } = await useFetch(`/api/genres/${type}`)

const genresIdMapping = {};

for (const genre of data._rawValue) {
  genresIdMapping[genre.name] = genre.id;

}

if (process.client) {
  localStorage.setItem(`${type}-genres`, JSON.stringify(genresIdMapping));
}
</script>

<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-1">
          {{ type }} genres
        </h1>
        <p class="subtitle is-3">
          Lets keep you entertained by suggesting {{ type }} content to binge on from folowing genres at random.
        </p>
        <hr>
        <p class="subtitle">
          Pick from any of the following genres
        </p>

        <div class="columns is-multiline">
          <div class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd" v-for="genre in data">
            <GenreCard :type="type" :genre="genre" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>