<template>
  <section class="hero-body">
    <div class="container is-fluid has-text-centered">
      <h1 class="title is-1">ThingsToBinge</h1>
      <p class="subtitle is-3">
        Lets keep you entertained by suggesting movie and tv content to binge on from many genres at random.
      </p>
      <hr />

      <div class="columns is-variable is-8 is-centered">
        <div class="column is-one-quarter">
          <div class="card">
            <div class="card-content">
              <h2 class="title">Movie</h2>
            </div>
            <div class="card-image is-flex is-justify-content-center">
              <figure class="image is-256x256">
                <nuxt-img src="/images/Movie.png" alt="Movie" placeholder />
              </figure>
            </div>
            <div class="card-content">
              <NuxtLink class="button is-dark is-outlined" :to="{ name: 'genres-type', params: { type: 'movie' } }">
                <span class="icon-text">
                  <span>Movie</span>
                  <span class="icon">
                    <i class="fa-regular fa-circle-right"></i>
                  </span>
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="column is-one-quarter">
          <div class="card">
            <div class="card-content">
              <h2 class="title">TV</h2>
            </div>
            <div class="card-image is-flex is-justify-content-center">
              <figure class="image is-256x256">
                <nuxt-img src="/images/TV.png" alt="TV" placeholder />
              </figure>
            </div>
            <div class="card-content">
              <NuxtLink class="button is-dark is-outlined" :to="{ name: 'genres-type', params: { type: 'tv' } }">
                <span class="icon-text">
                  <span>TV</span>
                  <span class="icon">
                    <i class="fa-regular fa-circle-right"></i>
                  </span>
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
