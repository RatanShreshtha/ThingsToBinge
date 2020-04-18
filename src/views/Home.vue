<template>
  <b-container class="p-4">
    <h1>Things To Binge.</h1>
    <p class="lead">
      Lets keep you entertained by suggesting movie and series to binge on from many genres at random.
    </p>
    <hr class="my-4" />
    <p>For suggestions just click on movie or series.</p>
    <b-row class="justify-content-center">
      <b-col md="4" class="text-center">
        <b-img src="@/assets/film-reel.png" fluid center alt="movie"></b-img>
        <b-button variant="outline-dark" pill block size="lg" :to="{ name: 'genres', params: { type: 'movie' } }">
          Movie <i class="fas fa-arrow-circle-right"></i>
        </b-button>
      </b-col>
      <b-col md="4" class="text-center">
        <b-img src="@/assets/retro-tv.png" fluid center alt="movie"></b-img>
        <b-button variant="outline-dark" pill block size="lg" :to="{ name: 'genres', params: { type: 'series' } }">
          Series <i class="fas fa-arrow-circle-right"></i>
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped></style>
