<script setup>
defineProps({
  genre: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});
</script>

<template>
  <article class="card">
    <header class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-6">{{ genre.name }}</p>
        </div>
      </div>
    </header>
    <section class="card-image is-flex is-justify-content-center">
      <figure class="image is-128x128">
        <nuxt-img :src="`/images/${genre.name}.png`" :alt="genre.name" placeholder />
      </figure>
    </section>
    <footer class="card-content">
      <NuxtLink
        class="button is-dark is-outlined"
        :to="{
          name: 'suggestion-genre-type',
          params: { genre: genre.name, type: type }
        }"
      >
        <span class="icon-text">
          <span>{{ genre.name }}</span>
          <span class="icon">
            <i class="fa-regular fa-circle-right"></i>
          </span>
        </span>
      </NuxtLink>
    </footer>
  </article>
</template>
