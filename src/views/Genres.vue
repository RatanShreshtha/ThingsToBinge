<template>
  <b-container>
    <h1 class="text-center text-capitalize">{{ heading }}</h1>
    <hr class="my-4" />
    <div class="d-flex justify-content-center mb-3" v-if="loading">
      <b-spinner style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
    </div>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4" v-if="!loading">
      <b-col class="text-center" v-for="(genre, i) in genres" :key="i">
        <b-card :title="genre.name" class="mb-4 shadow">
          <div class="mb-2">
            <b-img v-bind="props" :src="genre.imgUrl" :alt="genre.name" block center></b-img>
          </div>
          <b-button :to="{ name: 'content', params: { type: type, genre: genre.name } }" variant="outline-dark">
            {{ genre.name }} <i class="fas fa-arrow-circle-right"></i>
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { db } from '@/firebase'
export default {
  name: 'Genres',
  data: () => ({
    error: '',
    genres: [],
    loading: true,
    heading: 'Loading ... ',
    props: { width: 85, height: 85 }
  }),
  computed: {
    type() {
      return this.$route.params.type
    }
  },
  watch: {
    async type() {
      await this.getGenres()
    }
  },
  async created() {
    await this.getGenres()
  },
  methods: {
    async getGenres() {
      try {
        const genres = `${this.type}Genres`

        if (localStorage.getItem(genres)) {
          this.genres = JSON.parse(localStorage.getItem(genres))
          this.heading = `${this.type} Genres`
          return
        }

        const metadataRef = await db
          .collection('metadata')
          .doc(this.type)
          .get()

        const metadata = metadataRef.data()
        this.genres = metadata.genres
        localStorage.setItem(genres, JSON.stringify(this.genres))

        this.heading = `${this.type} Genres`
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped></style>
