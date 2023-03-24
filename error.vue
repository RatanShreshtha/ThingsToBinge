<script setup>
const error = useError();

const handleError = () =>{
  clearError({ redirect: '/' })
}
</script>

<template>
  <AppNav />
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">

        <h1 class="title is-1">
          Houston, we've had a problem.
        </h1>
        <p class="subtitle is-3">
          {{ error.statusCode }}
        </p>
        <hr>
        <p class="subtitle">
          {{ error.statusMessage }}
        </p>

        <div class="columns is-variable is-8 is-centered">
          <div class="column is-one-third">
            <div class="card">
              <div class="card-content">
                <h2 class="title">
                  {{ error.statusCode }}
                </h2>
              </div>
              <div class="card-image">
                <figure class="image is-square">
                  <nuxt-img src="/img/errors/radar.png" alt="Not Found" placeholder v-if="error.statusCode == '404'"/>
                  <nuxt-img src="/img/errors/road-closure.png" alt="Internal Server Error" placeholder v-if="error.statusCode == '500'"/>
                </figure>
              </div>
              <div class="card-content">
                <button class="button is-dark is-outlined" @click="handleError()">
                  <span class="icon-text">
                    <span>Home</span>
                    <span class="icon">
                      <i class="fa-regular fa-circle-right"></i>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <AppFooter />
</template>
  