<template>
  <main class="container text-center mb-0">
    <h1 class="d-md-none text-capitalize">{{ heading }}</h1>
    <h1 class="d-none d-md-block display-1 text-capitalize">{{ heading }}</h1>
    <hr class="my-4" />
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
      <div class="col mb-4" v-for="(object, i) in objects" :key="i">
        <div class="card shadow">
          <img
            class="card-img-top img-fluid mx-auto p-1"
            :src="object.imgUrl"
            :alt="object.name"
          />
          <div class="card-body">
            <h5 class="card-title text-capitalize">{{ object.name }}</h5>
            <router-link
              :to="{
                name: 'suggestion',
                params: { type: object.type, genre: object.name }
              }"
              class="btn btn-outline-dark btn-sm text-capitalize"
            >
              {{ object.name }} {{ object.type }}
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "GenresGrid",
  props: {
    heading: {
      type: String,
      required: true
    },
    objects: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
img {
  width: 80px;
  height: 80px;
}
</style>
