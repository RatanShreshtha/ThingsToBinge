<script setup>
const { genre } = defineProps({
  genre: {
    type: Object,
    required: true,
  },
});

const imageUrl = `/img/genres/${genre.name}.png`
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ genre.name }}</p>
        </div>
      </div>
    </div>
    <div class="card-image">
      <figure class="image is-square">
        <nuxt-img :src="imageUrl" :alt="genre.name" placeholder />
      </figure>
    </div>
    <div class="card-content">
      <NuxtLink class="button is-dark is-outlined"
        :to="{ name: 'content-genre-type', params: { genre: genre.name, type: 'movie' } }">
        <span class="icon-text">
          <span>{{ genre.name }}</span>
          <span class="icon">
            <i class="fa-regular fa-circle-right"></i>
          </span>
        </span>
      </NuxtLink>
    </div>
  </div>
</template>