<template>
  <div class="card shadow mt-4">
    <div class="card-body">
      <h1 class="card-title">{{ object.Title }}</h1>
      <h6 class="card-subtitle my-2 text-muted">
        Runtime: {{ object.Runtime }}, Released: {{ object.Released }}, Rated:
        {{ object.Rated }}
      </h6>
      <p class="lead card-text">{{ object.Plot }}</p>

      <div class="row">
        <div class="col-md-3">
          <img
            class="img-fluid mx-auto"
            :src="object.Poster"
            :alt="object.Title"
          />
        </div>
        <div class="col-md-9">
          <hr class="my-4" />
          <p class="lead">
            <span class="font-weight-bold">Genre: </span>
            <span class="text-capitalize">{{ genre }}</span>
            <br />
            <span class="font-weight-bold">Director:</span>
            {{ object.Director }}
            <br />
            <span class="font-weight-bold">Writer:</span>
            {{ object.Writer }}
            <br />
            <span class="font-weight-bold">Cast:</span> {{ object.Actors }}
            <br />
            <span class="font-weight-bold">Language:</span>
            {{ object.Language }}
            <br />
            <span class="font-weight-bold">Country:</span>
            {{ object.Country }}
          </p>
          <hr class="my-4" />
          <p class="lead">
            <span class="font-weight-bold">IMDb Rating:</span>
            {{ object.imdbRating }}
            <br />
            <span class="font-weight-bold">Awards:</span>
            {{ object.Awards }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  Title: "SuggestionCard",
  props: {
    object: {
      type: Object,
      required: true
    }
  },
  computed: {
    genre() {
      return this.$route.params.genre;
    }
  }
};
</script>

<style scoped></style>
