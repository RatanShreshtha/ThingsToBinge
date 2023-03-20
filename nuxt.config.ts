// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-gtag', '@nuxt/image-edge',],
  app: {
    head: {
      title: 'ThingsToBinge',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Lets keep you entertained by suggesting movie and series to binge on from many genres at random.' }
      ],
    },
  },
  css: ["assets/main.scss", "@fortawesome/fontawesome-free/css/all.css"],
  image: { provider: 'netlify' },
  runtimeConfig: {
    tmdbApiKey: process.env.TMDB_API_KEY
  }
})
