export default defineEventHandler(async (event) => {
  const { genre, type } = event.context.params;
  const { tmdbApiKey, tmdbApiBaseUrl } = useRuntimeConfig();

  const params = {
    api_key: tmdbApiKey,
    'vote_count.gte': 1000,
    'vote_average.gte': 6.5
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
    const { total_pages } = await $fetch(metadataUri);
    totalPagesOnRetry = total_pages;
  }

  params.page = totalPages > 1 ? Math.ceil(Math.random() * totalPages) : Math.ceil(Math.random() * totalPagesOnRetry);

  const suggestionUri = `${tmdbApiBaseUrl}/discover/${type}?` + new URLSearchParams(params);
  const { results } = await $fetch(suggestionUri);

  const suggestionIdx = Math.floor(Math.random() * results.length);

  const suggestionId = results[suggestionIdx].id;

  const suggestionDetailsUri = `${tmdbApiBaseUrl}/${type}/${suggestionId}?api_key=${tmdbApiKey}`;
  const suggestionCreditsUri = `${tmdbApiBaseUrl}/${type}/${suggestionId}/credits?api_key=${tmdbApiKey}`;
  const suggestionWatchProvidersUri = `${tmdbApiBaseUrl}/${type}/${suggestionId}/watch/providers?api_key=${tmdbApiKey}`;

  const data = await Promise.all([
    $fetch(suggestionDetailsUri),
    $fetch(suggestionCreditsUri),
    $fetch(suggestionWatchProvidersUri)
  ]);

  const [suggestionDetails, suggestionCredits, suggestionWatchProviders] = data;

  const suggestion = { ...suggestionDetails };

  suggestionDetails['genres'] = suggestionDetails['genres'].map((genre) => genre.name).join(', ');
  suggestionDetails['spoken_languages'] = suggestionDetails['spoken_languages']
    .map((spokenLanguages) => spokenLanguages.english_name)
    .join(', ');
  suggestionDetails['production_companies'] = suggestionDetails['production_companies']
    .map((productionCompanies) => `${productionCompanies.name} (${productionCompanies.origin_country})`)
    .join(', ');

  suggestionDetails['actresses'] = suggestionCredits['cast']
    .filter((cast) => cast.gender === 1)
    .map((cast) => cast.name)
    .join(', ');
  suggestionDetails['actors'] = suggestionCredits['cast']
    .filter((cast) => cast.gender === 2)
    .map((cast) => cast.name)
    .join(', ');
  suggestionDetails['writers'] = suggestionCredits['crew']
    .filter((crew) => crew.known_for_department === 'Writing')
    .map((crew) => crew.name)
    .join(', ');
  suggestionDetails['directors'] = suggestionCredits['crew']
    .filter((crew) => crew.job === 'Director')
    .map((crew) => crew.name)
    .join(', ');

  return suggestion;
});
