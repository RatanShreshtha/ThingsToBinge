<template>
  <Loader heading="Getting List of Genres." v-if="loading" />
  <GenresGrid :heading="heading" :objects="genres" v-else />
</template>

<script>
import { db } from "@/firebase";
import Loader from "@/components/Loader";
import GenresGrid from "@/components/GenresGrid";
export default {
  name: "Genres",
  components: {
    Loader,
    GenresGrid
  },
  data: () => ({
    genres: [],
    loading: true
  }),
  computed: {
    heading() {
      return `${this.$route.params.type} Genres`;
    }
  },
  async mounted() {
    await this.getGenres();
  },
  methods: {
    async getGenres() {
      try {
        const genresRef = db.collection("genres");
        const docsRef = await genresRef.get();

        for (let doc of docsRef.docs) {
          const data = doc.data();
          data.type = this.$route.params.type;

          this.genres.push(data);
        }
        setTimeout(() => {
          this.loading = false;
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped></style>
