<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <a class="navbar-brand" href="/">
      t<sub>2</sub>wiq
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarContent">
      <span class="navbar-text">
        Things To Watch In Quarantine.
      </span>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" tag="a" class="nav-link" active-class="active">
            <img
              class="d-inline mr-2"
              src="https://firebasestorage.googleapis.com/v0/b/things-to-watch-in-quarantine.appspot.com/o/home.png?alt=media&token=94eb16db-f68b-47ae-a655-0430dc19ed41"
              alt="Home"
            />
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'genres', params: { type: 'movies' } }"
            tag="a"
            class="nav-link"
            active-class="active"
          >
            <img
              class="d-inline mr-2"
              src="https://firebasestorage.googleapis.com/v0/b/things-to-watch-in-quarantine.appspot.com/o/movies.png?alt=media&token=21d45122-ca44-4d5b-8411-d06cb0aa48bf"
              alt="Movies"
            />
            Movies
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'genres', params: { type: 'tv-series' } }"
            tag="a"
            class="nav-link"
            active-class="active"
          >
            <img
              class="d-inline mr-2"
              src="https://firebasestorage.googleapis.com/v0/b/things-to-watch-in-quarantine.appspot.com/o/tv-series.png?alt=media&token=f21c7c39-1d61-4299-aec6-30b65f4ba7b7"
              alt="Series"
            />
            TV Series
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'about' }"
            tag="a"
            class="nav-link"
            active-class="active"
          >
            <img
              class="d-inline mr-2"
              src="https://firebasestorage.googleapis.com/v0/b/things-to-watch-in-quarantine.appspot.com/o/information.png?alt=media&token=fd6a6b63-5e42-4671-b01a-ed0a659f02ad"
              alt="About"
            />
            About
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
img {
  width: 30px;
  height: 30px;
}
</style>
