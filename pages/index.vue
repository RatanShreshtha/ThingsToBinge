<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">

        <h1 class="title is-1">
          Things To Binge
        </h1>
        <p class="subtitle is-3">
          Lets keep you entertained by suggesting movie and tv content to binge on from many genres at random.
        </p>
        <hr>
        <p class="subtitle">
          For suggestions just click on movie or series.
        </p>

        <div class="columns is-variable is-8 is-centered">
          <div class="column is-one-third">
            <div class="card">
              <div class="card-content">
                <h2 class="title">
                  Movie
                </h2>
              </div>
              <div class="card-image">
                <figure class="image is-square">
                  <img src="/img/content-type/film-reel.png" alt="Movie">
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
          <div class="column is-one-third">
            <div class="card">
              <div class="card-content">
                <h2 class="title">
                  TV
                </h2>
              </div>
              <div class="card-image">
                <figure class="image is-square">
                  <img src="/img/content-type/retro-tv.png" alt="TV">
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
    </div>
  </section>
</template>