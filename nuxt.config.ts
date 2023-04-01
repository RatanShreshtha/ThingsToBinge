// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-gtag', '@nuxt/image-edge', '@nuxtjs/robots', '@vite-pwa/nuxt', '@vueuse/nuxt'],
  app: {
    head: {
      title: 'ThingsToBinge',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'ThingsToBinge portal suggests movie and tv content to binge on from many genres at random.'
        }
      ]
    }
  },
  css: ['assets/main.scss', '@fortawesome/fontawesome-free/css/all.css'],
  routeRules: {
    // Static page generated on-demand, revalidates in background
    '/genres/**': { swr: true },
    // Static page generated on-demand once
    '/': { static: true },
    '/about': { static: true },
    // Render these routes with SPA
    '/suggestion/**': { ssr: false }
  },
  image: { provider: 'netlify' },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'ThingsToBinge',
      short_name: 'ThingsToBinge',
      theme_color: '#ffffff',
      description: 'ThingsToBinge portal suggests movie and tv content to binge on from many genres at random.',
      icons: [
        {
          src: 'images/icons/android-launchericon-48-48.png',
          sizes: '48x48',
          type: 'image/png'
        },
        {
          src: 'images/icons/android-launchericon-72-72.png',
          sizes: '72x72',
          type: 'image/png'
        },
        {
          src: 'images/icons/android-launchericon-96-96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: 'images/icons/android-launchericon-144-144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: 'images/icons/android-launchericon-192-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'images/icons/android-launchericon-512-512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/'
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },
  runtimeConfig: {
    tmdbApiKey: process.env.TMDB_API_KEY,
    tmdbApiBaseUrl: process.env.TMDB_API_BASE_URL
  }
});
