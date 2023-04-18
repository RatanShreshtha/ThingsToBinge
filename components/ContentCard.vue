<script setup>
defineProps({
  content: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <article class="card has-text-left">
    <section class="card-content">
      <div class="columns is-multiline">
        <div class="column is-full">
          <p class="title">
            {{ content.name }}{{ content.title }}
            <span v-if="content.name != content.original_name || content.title != content.original_title">
              ({{ content.original_name }}{{ content.original_title }})
            </span>
          </p>
          <p v-if="content.tagline" class="subtitle">
            {{ content.tagline }}
          </p>
        </div>

        <div class="column is-one-third">
          <figure class="image is-2by3">
            <img :src="`https://image.tmdb.org/t/p/w400/${content.poster_path}`" :alt="content.title" />
          </figure>
        </div>

        <div class="column is-two-thirds">
          <div class="block">
            <p><strong>Overview:</strong> {{ content.overview }}</p>
          </div>
          <div class="block">
            <p><strong>Genres:</strong> {{ content.genres }}</p>
            <p><strong>Spoken Languages:</strong> {{ content.spoken_languages }}</p>
            <p><strong>Actors:</strong> {{ content.actors }}</p>
            <p><strong>Actresses:</strong> {{ content.actresses }}</p>
            <p><strong>Writers:</strong> {{ content.writers }}</p>
            <p><strong>Directors:</strong> {{ content.directors }}</p>
            <p><strong>Production Companies:</strong> {{ content.production_companies }}</p>
          </div>

          <div class="block">
            <p><strong>Runtime:</strong> {{ content.runtime }}</p>
            <p>
              <strong>Ratings:</strong>
              {{ content.vote_average }}
            </p>
            <p><strong>Total Votes:</strong> {{ content.vote_count }}</p>

            <p><strong>Budget:</strong> ${{ content.budget }}.00</p>
            <p><strong>Revenue:</strong> ${{ content.revenue }}.00</p>
            <p><strong>Release Date:</strong> {{ content.release_date }}</p>
          </div>

          <div v-if="content.watch_providers" class="block">
            <p><strong>Available On:</strong></p>

            <template v-for="(providers, kind) in content.watch_providers" :key="kind">
              <template v-if="providers.length > 0">
                <p>
                  <strong>{{ kind }}</strong>
                </p>

                <nav class="level is-mobile">
                  <div class="level-left">
                    <a
                      v-for="provider in providers"
                      :key="`${kind}-${provider.provider_id}`"
                      class="level-item"
                      :title="provider.provider_name"
                    >
                      <figure class="image is-32x32">
                        <img
                          :src="`https://image.tmdb.org/t/p/w200/${provider.logo_path}`"
                          :alt="provider.provider_name"
                        />
                      </figure>
                    </a>
                  </div>
                </nav>
              </template>
            </template>
          </div>
        </div>
      </div>
    </section>
    <slot name="footer"></slot>
  </article>
</template>
