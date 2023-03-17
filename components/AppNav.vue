<script setup>
const state = reactive({ isExpanded: false });

const toggleNavbar = () => {
  state.isExpanded = !state.isExpanded;
};
</script>

<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" :to="{ name: 'index' }">
        <span class="is-size-3 has-text-weight-medium"> ThingsToBinge </span>
      </NuxtLink>

      <a role="button" :class="{ 'navbar-burger': true, 'is-active': state.isExpanded }" aria-label="menu"
        :aria-expanded="state.isExpanded" data-target="navbarBasic" @click="toggleNavbar()">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasic" :class="{ 'navbar-menu': true, 'is-active': state.isExpanded }">
      <div class="navbar-end">
        <NuxtLink class="navbar-item" active-class="is-active" :to="{ name: 'index' }">
          Home
        </NuxtLink>
        <NuxtLink class="navbar-item" active-class="is-active" :to="{ name: 'genres-type' , params:{type: 'movie'}}">
          Movie
        </NuxtLink>
        <NuxtLink class="navbar-item" active-class="is-active" :to="{ name: 'genres-type', params:{type: 'tv'} }">
          TV
        </NuxtLink>
        <NuxtLink class="navbar-item" active-class="is-active" :to="{ name: 'about' }">
          About
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
