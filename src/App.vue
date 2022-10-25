<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        Things To Binge
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item">
          Home
        </a>

        <a class="navbar-item">
          Movie
        </a>

        <a class="navbar-item">
          Series
        </a>

        <a class="navbar-item">
          About
        </a>
      </div>
    </div>
  </nav>

  <RouterView />
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Made with 
        <span class="icon-text">
          <span>love</span>
          <span class="icon has-text-danger">
            <i class="fa-solid fa-heart"></i>
          </span>
        </span>
        +
        <span class="icon-text">
          <span>time</span>
          <span class="icon has-text-info">
            <i class="fa-solid fa-clock"></i>
          </span>
        </span>
      </p>
    </div>
  </footer>
</template>

<style scoped>

</style>
