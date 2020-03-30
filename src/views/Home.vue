<template>
  <main class="jumbotron bg-light mb-0">
    <h1 class="d-none d-md-block display-1">Things To Watch In Quarantine.</h1>
    <h1 class="d-md-none d-block">Things To Watch In Quarantine.</h1>
    <p class="h5 text-justify">
      Are you bored in quarantine? Lets keep you entertained by suggesting
      movies and tv series to binge on in this quarantine from genres like
      action
      <img
        class="img-fluid d-inline"
        src="../assets/img/boom.png"
        alt="Action"
      />, comedy
      <img
        class="img-fluid d-inline"
        src="../assets/img/comedy.png"
        alt="Comedy"
      />, crime
      <img
        class="img-fluid d-inline"
        src="../assets/img/scales.png"
        alt="Crime"
      />, fantasy
      <img
        class="img-fluid d-inline"
        src="../assets/img/fantasy.png"
        alt="Fantasy"
      />, horror
      <img
        class="img-fluid d-inline"
        src="../assets/img/scream.png"
        alt="Scream"
      />, romance
      <img
        class="img-fluid d-inline"
        src="../assets/img/winged-heart.png"
        alt="Romance"
      />, sci-fi
      <img
        class="img-fluid d-inline"
        src="../assets/img/robot.png"
        alt="Sci-Fi"
      />, sports
      <img
        class="img-fluid d-inline"
        src="../assets/img/jersey.png"
        alt="Sports"
      />
      and many more
      <img
        class="img-fluid d-inline"
        src="../assets/img/book-shelf.png"
        alt="shelf"
      />
      at random.
    </p>
    <div class="container">
      <div class="row justify-content-center m-4">
        <div class="col-md-6 text-center">
          <a href="/content/movie">
            <img
              class="img-fluid mx-auto d-block"
              src="../assets/img/documentary.png"
              alt="Movies"
            />
            <p class="display-4 mt-2 text-dark">
              Movies
            </p>
          </a>
        </div>
        <div class="col-md-6 text-center">
          <a href="/content/tv-series">
            <img
              class="img-fluid mx-auto d-block"
              src="../assets/img/retro-tv.png"
              alt="Movies"
            />

            <p class="display-4 mt-2 text-dark">
              TV Series
            </p>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
img.d-block {
  width: 400px;
  height: 400px;
}
img.d-inline {
  width: 50px;
  height: 50px;
}
</style>
