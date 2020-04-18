<template>
  <b-container>
    <h1 class="text-center text-capitalize">Shared to you</h1>
    <div class="d-flex justify-content-center mb-3" v-if="loading">
      <b-spinner style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
    </div>
    <b-card class="my-3 shadow" v-if="!loading">
      <b-card-body>
        <b-card-title :title="content.Title"></b-card-title>
        <b-card-sub-title :sub-title="subTitle"></b-card-sub-title>
        <hr class="my-4" />
        <b-row>
          <b-col md="4">
            <b-card-img :src="content.Poster" :alt="content.Title" class="align-middle"></b-card-img>
          </b-col>
          <b-col md="8">
            <b-card-body>
              <p class="lead"><b>Plot:</b> {{ content.Plot }}</p>
              <hr class="my-4" />
              <p>
                <b>Genre:</b> {{ genre }} <br />
                <b>Director:</b> {{ content.Director }} <br />
                <b>Writer:</b> {{ content.Writer }} <br />
                <b>Writer:</b> {{ content.Writer }} <br />
                <b>Cast:</b> {{ content.Actors }} <br />
                <b>Language:</b> {{ content.Language }} <br />
                <b>Country:</b> {{ content.Country }} <br />
              </p>
              <hr class="my-4" />
              <p>
                <b>IMDb Rating:</b> {{ content.imdbRating }} <br />
                <b>Awards:</b> {{ content.Awards }} <br />
              </p>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import { db } from '@/firebase'
export default {
  name: 'Content',
  data: () => ({
    content: null,
    loading: true
  }),
  computed: {
    id() {
      return this.$route.params.id
    },
    subTitle() {
      return `Runtime: ${this.content.Runtime}, Released: ${this.content.Released}, Rated: ${this.content.Rated}`
    }
  },
  async created() {
    await this.getContent()
  },
  methods: {
    async getContent() {
      try {
        const docRef = await db
          .collection('content')
          .doc(this.id)
          .get()

        this.content = docRef.data()
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped></style>
