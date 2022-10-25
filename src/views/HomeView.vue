<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <section class="section has-text-centered">
    <div class="container">
      <h1 class="title">
        Things To Binge
      </h1>
      <p class="subtitle">
        Lets keep you entertained by suggesting movie and series to binge on from many genres at random.
      </p>

      <hr />

      <p class="subtitle is-6">
        For suggestions just click on movie or series.
      </p>

      <div class="columns">
        <div class="column">
          <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png">
          </figure>

          <br>

          <button class="button is-black is-outlined">Outlined</button>
        </div>
        <div class="column">
          <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png">
          </figure>

          <br>

          <button class="button is-black is-outlined">Outlined</button>
        </div>
      </div>
    </div>
  </section>
</template>
