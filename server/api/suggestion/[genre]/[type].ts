export default defineEventHandler(async (event) => {
  const queryParams = getQuery(event);
  const { genre, type } = event.context.params;
  const { tmdbApiKey, tmdbApiBaseUrl } = useRuntimeConfig();

  const params = {
    api_key: tmdbApiKey,
    region: queryParams?.region || 'IN',
    'vote_count.gte': 1000,
    'vote_average.gte': 6.5,
    language: queryParams?.language || 'en-IN'
  };

  const genreUri = `${tmdbApiBaseUrl}/genre/${type}/list?api_key=${tmdbApiKey}`;
  const { genres } = await $fetch(genreUri);

  for (const genreObj of genres) {
    if (genreObj.name === genre) {
      params.with_genres = genreObj.id;
    }
  }

  const metadataUri = `${tmdbApiBaseUrl}/discover/${type}?` + new URLSearchParams(params);
  const { total_pages: totalPages } = await $fetch(metadataUri);

  let totalPagesOnRetry = 1;

  if (totalPages < 2) {
    params['vote_count.gte'] = 10;
    params['vote_average.gte'] = 4.5;

    const metadataUri = `${tmdbApiBaseUrl}/discover/${type}?` + new URLSearchParams(params);
    const { total_pages: totalPages } = await $fetch(metadataUri);
    totalPagesOnRetry = totalPages;
  }

  params.page = totalPages > 1 ? Math.ceil(Math.random() * totalPages) : Math.ceil(Math.random() * totalPagesOnRetry);

  const suggestionUri = `${tmdbApiBaseUrl}/discover/${type}?` + new URLSearchParams(params);
  const { results } = await $fetch(suggestionUri);

  const suggestionIdx = Math.floor(Math.random() * results.length);

  const suggestionId = results[suggestionIdx].id;

  return suggestionId;
});
