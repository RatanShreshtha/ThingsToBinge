<script setup>
const state = reactive({ isExpanded: false });

const toggleNavbar = () => {
  state.isExpanded = !state.isExpanded;
};
</script>

<template>
  <header class="hero-head">
    <nav
      class="navbar is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <NuxtLink
          class="navbar-item has-text-weight-bold"
          :to="{ name: 'index' }"
        >
          <span class="is-size-5 has-text-weight-bold"> ThingsToBinge </span>
        </NuxtLink>

        <a
          role="button"
          :class="{ 'navbar-burger': true, 'is-active': state.isExpanded }"
          aria-label="menu"
          :aria-expanded="state.isExpanded"
          data-target="navbarBasic"
          @click="toggleNavbar()"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasic"
        :class="{ 'navbar-menu': true, 'is-active': state.isExpanded }"
      >
        <div class="navbar-end">
          <NuxtLink
            class="navbar-item has-text-weight-semibold"
            active-class="is-active"
            :to="{ name: 'index' }"
          >
            <nuxt-img src="/images/Home.png" alt="TV" placeholder />
            Home
          </NuxtLink>
          <NuxtLink
            class="navbar-item has-text-weight-semibold"
            active-class="is-active"
            :to="{ name: 'genres-type', params: { type: 'movie' } }"
          >
            <nuxt-img src="/images/Movie.png" alt="TV" placeholder />

            Movie
          </NuxtLink>
          <NuxtLink
            class="navbar-item has-text-weight-semibold"
            active-class="is-active"
            :to="{ name: 'genres-type', params: { type: 'tv' } }"
          >
            <nuxt-img src="/images/TV.png" alt="TV" placeholder />
            TV
          </NuxtLink>
          <NuxtLink
            class="navbar-item has-text-weight-semibold"
            active-class="is-active"
            :to="{ name: 'about' }"
          >
            <nuxt-img src="/images/About.png" alt="TV" placeholder />
            About
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>
