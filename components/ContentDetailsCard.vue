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
      <div class="columns is-multiline">
        <div class="column is-full">
          <div class="block">
            <p class="title" v-if="content.name">
              {{ content.name }} <span v-if="content.tagline">({{ content.tagline }})</span>
            </p>
            <p class="title" v-if="content.title">
              {{ content.title }} <span v-if="content.tagline">({{ content.tagline }})</span>
            </p>

            <p class="subtitle">
              Runtime: {{ content.runtime }}, Released: {{ content.release_date }},
              Budget:
              ${{ content.budget }}.00, Revenue:
              ${{ content.revenue }}.00
            </p>
          </div>
        </div>
        <div class="column is-one-third">
          <figure class="image is-2by3">
            <img :src="`https://image.tmdb.org/t/p/w400/${content.poster_path}`" :alt="content.title" />
          </figure>
        </div>

        <div class="column is-two-thirds">

          <div class="block">

            <p v-if="content.name != content.original_name || content.title != content.original_title">
              <strong>Originally:</strong> {{ content.original_name }}{{ content.original_title }}
            </p>
            <p>
              <strong>Overview:</strong> {{ content.overview }}
            </p>
          </div>
          <div class="block">
            <p>
              <strong>Genres:</strong> {{ content.genres }}
            </p>
            <p>
              <strong>Spoken Languages:</strong> {{ content.spoken_languages }}

            </p>
            <p>
              <strong>Cast:</strong> {{ content.cast }}

            </p>
            <p>
              <strong>Writers:</strong> {{ content.writers }}
            </p>
            <p>
              <strong>Directors:</strong> {{ content.directors }}
            </p>
            <p>
              <strong>Production Companies:</strong> {{ content.production_companies }}
            </p>
          </div>

          <div class="block">
            <p>
            <strong>Ratings:</strong> {{ content.vote_average }}
            </p>
            <p>
            <strong>Total Votes:</strong> {{ content.vote_count }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
