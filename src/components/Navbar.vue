<template>
  <b-navbar toggleable="lg" type="light">
    <b-navbar-brand :to="{ name: 'home' }">Things To Binge</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ name: 'home' }">
          <b-img v-bind="props" src="@/assets/home.png" alt="home"></b-img>
          Home
        </b-nav-item>
        <b-nav-item :to="{ name: 'genres', params: { type: 'movie' } }">
          <b-img v-bind="props" src="@/assets/film-reel.png" alt="movie"></b-img>
          Movie
        </b-nav-item>
        <b-nav-item :to="{ name: 'genres', params: { type: 'series' } }">
          <b-img v-bind="props" src="@/assets/retro-tv.png" alt="Series"></b-img>
          Series
        </b-nav-item>
        <b-nav-item :to="{ name: 'about' }">
          <b-img v-bind="props" src="@/assets/about.png" alt="about"></b-img>
          About
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      props: { width: 45, height: 45 }
    }
  }
}
</script>

<style scoped></style>
