<template>
  <Loader heading="Getting suggestion for you." v-if="loading" />
  <main class="container my-0" v-else>
    <SuggestionCard :object="suggestion" />
    <div class="row my-4 ">
      <button class="btn btn-outline-dark mx-auto" @click="getRandomSuggestion">
        Give Me Another One
        <img
          class="d-inline mr-2"
          src="https://firebasestorage.googleapis.com/v0/b/things-to-watch-in-quarantine.appspot.com/o/transition-both-directions.png?alt=media&token=fdf19e1b-6f83-4fa8-8a23-1db6195cfa80"
          alt="Random"
        />
      </button>
    </div>
  </main>
</template>

<script>
import { db } from "@/firebase";
import { omdbApi } from "@/api";
import Loader from "@/components/Loader";
import SuggestionCard from "@/components/SuggestionCard";
export default {
  name: "Suggestion",
  components: {
    Loader,
    SuggestionCard
  },
  data: () => ({
    suggestion: null,
    loading: true
  }),
  async mounted() {
    await this.getSuggestion();
  },
  methods: {
    async getRandomSuggestion() {
      try {
        const type = this.$route.params.type;
        const genresRef = db.collection("genres");
        const docsRef = await genresRef.get();

        const genres = [];
        for (let doc of docsRef.docs) {
          const data = doc.data();
          data.type = this.$route.params.type;

          genres.push(data);
        }
        const genre = genres[Math.floor(Math.random() * genres.length)];

        this.$router.push({
          name: "suggestion",
          params: { type: type, genre: genre.name }
        });
        await this.getSuggestion();
      } catch (error) {
        console.error(error);
      }
    },
    async getSuggestion() {
      try {
        this.loading = true;
        const type = this.$route.params.type;
        const genre = this.$route.params.genre;

        const collectionRef = db.collection(type);
        const docsRef = await collectionRef.where("genre", "==", genre).get();

        const suggestions = [];
        for (let doc of docsRef.docs) {
          const data = doc.data();
          data.type = this.$route.params.type;
          suggestions.push(data);
        }

        const suggestion =
          suggestions[Math.floor(Math.random() * suggestions.length)];

        const resp = await omdbApi.get("/", {
          params: { apikey: process.env.VUE_APP_APIKEY, t: suggestion.title }
        });

        this.suggestion = resp.data;

        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
img.d-inline {
  width: 30px;
  height: 30px;
}
</style>
