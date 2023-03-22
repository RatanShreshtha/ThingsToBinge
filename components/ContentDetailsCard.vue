<script setup>
const { content } = defineProps({
  content: {
    type: Object,
    required: true,
  },
});

const posterPath = `https://image.tmdb.org/t/p/w400/${content.poster_path}`
</script>


<template>
  <div class="card has-text-left">
    <div class="card-content">
      <p class="title">{{ content.title }} <span class="has-text-weight-normal" v-if="content.tagline">({{ content.tagline
      }})</span></p>
      <p class="subtitle is-6">
        Ratings: {{ content.vote_average }}, Runtime: {{ content.runtime }}, Released: {{ content.release_date }}, Budget:
        ${{ content.budget }}.00, Revenue:
        ${{ content.revenue }}.00
      </p>
      <hr />
      <div class="columns">
        <div class="column is-one-third">
          <figure class="image">
            <img :src="posterPath" :alt="content.title" />
          </figure>
        </div>

        <div class="column is-two-thirds">
          <p class="title is-4">Overview: <span class="has-text-weight-normal">{{ content.overview }}</span></p>
          <hr />
          <p><strong>Genres:</strong> {{ content.genres }}</p>
          <p><strong>Spoken Languages:</strong> {{ content.spoken_languages }}</p>
          <p><strong>Cast:</strong> {{ content.cast }}</p>
          <p><strong>Writers:</strong> {{ content.writers }}</p>
          <p><strong>Directors:</strong> {{ content.directors }}</p>
          <p><strong>Production Companies:</strong> {{ content.production_companies }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
