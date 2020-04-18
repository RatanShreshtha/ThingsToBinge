<template>
  <b-container>
    <h1 class="text-center text-capitalize">{{ heading }}</h1>
    <div class="d-flex justify-content-center mb-3" v-if="loading">
      <b-spinner style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
    </div>
    <b-card class="my-3 shadow" v-if="!loading">
      <b-card-body>
        <b-row>
          <b-col md="9">
            <b-card-title :title="content.Title"></b-card-title>
            <b-card-sub-title :sub-title="subTitle"></b-card-sub-title>
          </b-col>
          <b-col md="3">
            <b-button class="mt-2 mx-1" variant="outline-dark" @click="getContent" size="sm">
              Another Suggestion <i class="fas fa-random"></i>
            </b-button>
          </b-col>
        </b-row>
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
      <b-card-footer>
        <social-sharing
          :url="shareUrl"
          :title="content.Title"
          :description="content.Plot"
          :quote="content.Title"
          :hashtags="content.Title"
          inline-template
        >
          <div class="text-center">
            <network network="email"> <i class="fas fa-envelope"></i> Email </network>
            <network network="facebook"><i class="fab fa-facebook-square"></i> Facebook </network>
            <network network="twitter"><i class="fab fa-twitter-square"></i> Twitter </network>
            <network network="whatsapp"><i class="fab fa-whatsapp-square"></i> Whatsapp </network>
          </div>
        </social-sharing>
      </b-card-footer>
    </b-card>
  </b-container>
</template>

<script>
import { db } from '@/firebase'
export default {
  name: 'Content',
  data: () => ({
    content: null,
    heading: 'Getting content suggestion',
    loading: true
  }),
  computed: {
    type() {
      return this.$route.params.type
    },
    genre() {
      return this.$route.params.genre
    },
    subTitle() {
      return `Runtime: ${this.content.Runtime}, Released: ${this.content.Released}, Rated: ${this.content.Rated}`
    },
    shareUrl() {
      const paths = this.$router.resolve({ name: 'share', params: { id: this.content.imdbID } }).href
      return window.origin + paths
    }
  },
  async created() {
    await this.getContent()
  },
  async destroyed() {
    localStorage.removeItem('contents')
  },
  methods: {
    async getContent() {
      try {
        if (localStorage.getItem('contents')) {
          const contents = JSON.parse(localStorage.getItem('contents'))
          this.content = contents[Math.floor(Math.random() * contents.length)]
          this.heading = `${this.genre} ${this.type}`
          return
        }

        const contentRef = await db
          .collection('content')
          .where('Genre', 'array-contains', this.genre)
          .where('Type', '==', this.type)
          .get()

        const contents = []
        for (let doc of contentRef.docs) {
          contents.push(doc.data())
        }

        this.content = contents[Math.floor(Math.random() * contents.length)]
        this.heading = `${this.genre} ${this.type}`

        localStorage.setItem('contents', JSON.stringify(contents))
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
