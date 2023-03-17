export default defineEventHandler(async (event) => {

    const { type } = event.context.params
    const { tmdbApiKey } = useRuntimeConfig()

    const uri = `https://api.themoviedb.org/3/genre/${type}/list?api_key=${tmdbApiKey}`
    const { genres } = await $fetch(uri)

    return genres
})