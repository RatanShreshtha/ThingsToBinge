<template>
  <main class="container-fluid mb-0">
    <h1 class="d-md-none">Things To Watch In Quarantine.</h1>
    <h1 class="d-none d-md-block display-1 text-center">
      Things To Watch In Quarantine.
    </h1>
    <p class="lead text-center">
      Lets keep you entertained by suggesting movies and serieses to binge on in
      this quarantine from many genres at random.
    </p>
    <hr class="my-4" />

    <p class="lead text-center">
      <span
        class="font-weight-bold text-capitalize"
        v-for="(genre, i) in genres"
        :key="i"
      >
        {{ genre.name }}
        <img class="img-fluid d-inline" :src="genre.imgUrl" :alt="genre.name" />
        <span v-if="lastIndex != i">,</span>
      </span>
    </p>
    <hr class="my-4" />
    <div class="row justify-content-around">
      <div class="col-md-4 text-center">
        <router-link :to="{ name: 'genres', params: { type: 'movies' } }">
          <img
            class="img-fluid mx-auto d-block"
            src="https://firebasestorage.googleapis.com/v0/b/things-to-watch-in-quarantine.appspot.com/o/movies.png?alt=media&token=21d45122-ca44-4d5b-8411-d06cb0aa48bf"
            alt="Movies"
          />
          <p class="d-none d-md-block display-4 mt-2 text-dark">
            Movies
          </p>
          <p class="d-md-none lead mt-2 text-dark">
            Movies
          </p>
        </router-link>
      </div>
      <div class="col-md-4 text-center">
        <router-link :to="{ name: 'genres', params: { type: 'tv-series' } }">
          <img
            class="img-fluid mx-auto d-block"
            src="https://firebasestorage.googleapis.com/v0/b/things-to-watch-in-quarantine.appspot.com/o/tv-series.png?alt=media&token=f21c7c39-1d61-4299-aec6-30b65f4ba7b7"
            alt="Movies"
          />

          <p class="d-none d-md-block display-4 mt-2 text-dark">
            TV Series
          </p>
          <p class="d-md-none lead mt-2 text-dark">
            TV Series
          </p>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import { db } from "@/firebase";

export default {
  name: "Home",
  data: () => ({
    genres: []
  }),
  computed: {
    lastIndex() {
      return this.genres.length - 1;
    }
  },
  firestore() {
    return {
      genres: db.collection("genres")
    };
  }
};
</script>

<style scoped>
img.d-inline {
  width: 50px;
  height: 50px;
}
img.d-block {
  width: 300px;
  height: 300px;
}
</style>
