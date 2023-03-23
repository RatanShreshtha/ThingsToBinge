<script setup>
const { content } = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>


<template>
  <div class="card has-text-left">
    <div class="card-content">
      <div class="columns">
        <div class="column is-one-third">
          <figure class="image is-2by3">
            <img :src="`https://image.tmdb.org/t/p/w400/${content.poster_path}`" :alt="content.title" />
          </figure>
        </div>

        <div class="column is-two-thirds">
          <div class="block">
            <p class="title" v-if="content.name">
              {{ content.name }} <span v-if="content.tagline">({{ content.tagline }})</span>
            </p>
            <p class="title" v-if="content.original_title">
              {{ content.original_title }} <span v-if="content.tagline">({{ content.tagline }})</span>
            </p>

            <p class="subtitle">
              Runtime: {{ content.runtime }}, Released: {{ content.release_date }},
              Budget:
              ${{ content.budget }}.00, Revenue:
              ${{ content.revenue }}.00
            </p>
          </div>
          <div class="block">

            <p v-if="content.name != content.original_name">
              <strong>Original Name:</strong> {{ content.original_name }}
            </p>
            <p v-if="content.title != content.original_title">
              <strong>Original Title:</strong> {{ content.original_title }}
            </p>
            <p>
              <strong>Overview: </strong> {{ content.overview }}
            </p>
          </div>
          <div class="block">
            <strong>Genres:</strong> {{ content.genres }}<br />
            <strong>Spoken Languages:</strong> {{ content.spoken_languages }}<br />
            <strong>Cast:</strong> {{ content.cast }}<br />
            <strong>Writers:</strong> {{ content.writers }}<br />
            <strong>Directors:</strong> {{ content.directors }}<br />
            <strong>Production Companies:</strong> {{ content.production_companies }}<br />
          </div>

          <div class="block">
            <strong>Ratings:</strong> {{ content.vote_average }}<br />
            <strong>Total votes:</strong> {{ content.vote_count }}<br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
