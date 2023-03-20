<script setup>
definePageMeta({
  validate: async (route) => {
    // Check if the type is either movie or tv
    return /movie|tv/.test(route.params.type)
  }
})

let genreId
const route = useRoute()
const genreName = route.params.genre
const contentType = route.params.type

if (process.client) {
  genreId = JSON.parse(localStorage.getItem(`${contentType}-genres`))[genreName]
}


const { data } = await useFetch(`/api/content/${genreId}/${contentType}`)
</script>

<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-1">
          {{ genreName }} {{ contentType }}
        </h1>
        <p class="subtitle is-3">
          This is our suggestion for {{ genreName.toLocaleLowerCase() }} {{ contentType }} to binge on.
        </p>
        <hr>
        <ContentDetailsCard :content="data" />
      </div>
    </div>
  </section>
</template>