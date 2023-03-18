<script setup>
definePageMeta({
  validate: async (route) => {
    // Check if the type is either movie or tv
    return /movie|tv/.test(route.params.type)
  }
})

const route = useRoute()
const contentType = route.params.type

const { data } = await useFetch(`/api/genres/${contentType}`)
</script>

<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-1">
          {{ contentType }} genres
        </h1>
        <p class="subtitle is-3">
          Lets keep you entertained by suggesting {{ contentType }} content to binge on from folowing genres at random.
        </p>
        <hr>
        <p class="subtitle">
          Pick from any of the following genres
        </p>

        <div class="columns is-multiline">
          <div class="column is-half-desktop is-one-third-widescreen is-one-quarter-fullhd" v-for="genre in data">
            <GenreCard :genre="genre" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>