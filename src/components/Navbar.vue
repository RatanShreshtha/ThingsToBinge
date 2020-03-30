<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
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
          <a class="nav-link" href="/">
            <img
              class="img-fluid d-inline mr-2"
              src="../assets/img/home.png"
              alt="Home"
            />
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">
            <img
              class="img-fluid d-inline mr-2"
              src="../assets/img/information.png"
              alt="About"
            />About</a
          >
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
img.img-fluid {
  width: 30px;
  height: 30px;
}
</style>
