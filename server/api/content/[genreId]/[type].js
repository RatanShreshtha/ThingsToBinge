export default defineEventHandler(async (event) => {
    const { tmdbApiKey } = useRuntimeConfig()
    const { genreId, type } = event.context.params

    const metadataUri = `https://api.themoviedb.org/3/discover/${type}?api_key=${tmdbApiKey}&include_adult=false&include_video=false&with_genres=${genreId}`
    const { total_pages, total_results } = await $fetch(metadataUri)

    const suggestions = Math.min(100, total_pages)
    const resultsPerPage = Math.ceil(total_results / total_pages)
    const suggestionIndex = Math.floor(Math.random() * suggestions)


    const page = Math.floor(suggestionIndex / resultsPerPage) ? Math.floor(suggestionIndex / resultsPerPage) : 1
    const itemNumber = suggestionIndex - (page * resultsPerPage)

    const suggestionUri = `https://api.themoviedb.org/3/discover/${type}?api_key=${tmdbApiKey}&include_adult=false&include_video=false&with_genres=${genreId}&page=${page}`

    const { results } = await $fetch(suggestionUri)

    const content = results[itemNumber]

    const contentDetailsUri = `https://api.themoviedb.org/3/${type}/${content.id}?api_key=${tmdbApiKey}`
    const contentCreditsUri = `https://api.themoviedb.org/3/${type}/${content.id}/credits?api_key=${tmdbApiKey}`
    const contentWatchProvidersUri = `https://api.themoviedb.org/3/${type}/${content.id}/watch/providers?api_key=${tmdbApiKey}`

    const data = await Promise.all([
        $fetch(contentDetailsUri),
        $fetch(contentCreditsUri),
        $fetch(contentWatchProvidersUri),
    ]);

    const [contentDetails, contentCredits, contentWatchProviders] = data;

    let genres = ""
    for (let obj of contentDetails['genres']) {

        genres += `${obj.name}, `
    }
    contentDetails['genres'] = genres.slice(0, -2);

    let spoken_languages = ""
    for (let obj of contentDetails['spoken_languages']) {

        spoken_languages += `${obj.english_name}, `
    }
    contentDetails['spoken_languages'] = spoken_languages.slice(0, -2);

    let production_companies = ""
    for (let obj of contentDetails['production_companies']) {

        production_companies += `${obj.name} (${obj.origin_country}), `
    }
    contentDetails['production_companies'] = production_companies.slice(0, -2);

    let cast = ""
    for (let obj of contentCredits['cast']) {

        cast += `${obj.name}, `
    }
    contentDetails['cast'] = cast.slice(0, -2);

    let writers = ""
    for (let obj of contentCredits['crew']) {
        if (obj.known_for_department === 'Writing') {
            writers += `${obj.name}, `
        }
    }
    contentDetails['writers'] = writers.slice(0, -2);

    let directors = ""
    for (let obj of contentCredits['crew']) {
        if (obj.known_for_department === 'Directing') {
            directors += `${obj.name}, `
        }
    }
    contentDetails['directors'] = directors.slice(0, -2);

    return { ...contentDetails }
})