<script setup>
const error = useError();

const handleError = () => {
  clearError({ redirect: '/' });
};
</script>

<template>
  <main>
    <AppHeader />
    <section class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Houston, we've had a problem.</h1>
        <p class="subtitle">
          {{ error.statusCode }}
        </p>
        <hr />

        <div class="columns is-variable is-8 is-centered">
          <div class="column is-one-third">
            <div class="card">
              <div class="card-content">
                <h2 class="title">
                  {{ error.statusMessage }}
                </h2>
              </div>
              <div class="card-image">
                <figure class="image is-square">
                  <nuxt-img v-if="error.statusCode == '404'" src="/images/Not Found.png" alt="Not Found" placeholder />
                  <nuxt-img v-else src="/images/Internal Server Error.png" alt="Internal Server Error" placeholder />
                </figure>
              </div>
              <div class="card-content">
                <button class="button is-dark is-outlined" @click="handleError()">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fa-solid fa-house"></i>
                    </span>
                    <span>Home</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AppFooter />
  </main>
</template>
