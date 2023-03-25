<script setup>
import { usePrecision } from "@vueuse/math";
import { useDateFormat } from "@vueuse/core";

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});

const formattedReleaseDate = useDateFormat(
  props.content.release_date,
  "DD MMMM, YYYY"
);
</script>

<template>
  <div class="card has-text-left">
    <div class="card-content">
      <div class="columns is-multiline">
        <div class="column is-full">
          <p class="title">
            {{ content.name }}{{ content.title }}
            <span
              v-if="
                content.name != content.original_name ||
                content.title != content.original_title
              "
            >
              ({{ content.original_name }}{{ content.original_title }})
            </span>
          </p>
          <p v-if="content.tagline" class="subtitle">
            {{ content.tagline }}
          </p>
        </div>

        <div class="column is-one-third">
          <figure class="image is-2by3">
            <img
              :src="`https://image.tmdb.org/t/p/w400/${content.poster_path}`"
              :alt="content.title"
            />
          </figure>
        </div>

        <div class="column is-two-thirds">
          <div class="block">
            <p><strong>Overview:</strong> {{ content.overview }}</p>
          </div>
          <div class="block">
            <p><strong>Genres:</strong> {{ content.genres }}</p>
            <p>
              <strong>Spoken Languages:</strong> {{ content.spoken_languages }}
            </p>
            <p><strong>Cast:</strong> {{ content.cast }}</p>
            <p><strong>Writers:</strong> {{ content.writers }}</p>
            <p><strong>Directors:</strong> {{ content.directors }}</p>
            <p>
              <strong>Production Companies:</strong>
              {{ content.production_companies }}
            </p>
          </div>

          <div class="block">
            <p><strong>Runtime:</strong> {{ content.runtime }}</p>
            <p>
              <strong>Ratings:</strong>
              {{ usePrecision(content.vote_average, 1) }}
            </p>
            <p><strong>Total Votes:</strong> {{ content.vote_count }}</p>

            <p><strong>Budget:</strong> ${{ content.budget }}.00</p>
            <p><strong>Revenue:</strong> ${{ content.revenue }}.00</p>
            <p><strong>Release Date:</strong> {{ formattedReleaseDate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
