export default defineEventHandler(async (event) => {
  const { genre, type } = event.context.params;
  const { tmdbApiKey, tmdbApiBaseUrl } = useRuntimeConfig();

  const params = {
    api_key: tmdbApiKey,
    'vote_count.gte': 500,
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

  const contentIdx = Math.floor(Math.random() * results.length);

  const content = results[contentIdx];

  const contentDetailsUri = `${tmdbApiBaseUrl}/${type}/${content.id}?api_key=${tmdbApiKey}`;
  const contentCreditsUri = `${tmdbApiBaseUrl}/${type}/${content.id}/credits?api_key=${tmdbApiKey}`;
  const contentWatchProvidersUri = `${tmdbApiBaseUrl}/${type}/${content.id}/watch/providers?api_key=${tmdbApiKey}`;

  const data = await Promise.all([
    $fetch(contentDetailsUri),
    $fetch(contentCreditsUri),
    $fetch(contentWatchProvidersUri)
  ]);

  const [contentDetails, contentCredits, contentWatchProviders] = data;

  let contentDetailsDenres = '';
  for (let obj of contentDetails['genres']) {
    contentDetailsDenres += `${obj.name}, `;
  }
  contentDetails['genres'] = contentDetailsDenres.slice(0, -2);

  let spoken_languages = '';
  for (let obj of contentDetails['spoken_languages']) {
    spoken_languages += `${obj.english_name}, `;
  }
  contentDetails['spoken_languages'] = spoken_languages.slice(0, -2);

  let production_companies = '';
  for (let obj of contentDetails['production_companies']) {
    production_companies += `${obj.name} (${obj.origin_country}), `;
  }
  contentDetails['production_companies'] = production_companies.slice(0, -2);

  let cast = '';
  for (let obj of contentCredits['cast']) {
    cast += `${obj.name}, `;
  }
  contentDetails['cast'] = cast.slice(0, -2);

  let writers = '';
  for (let obj of contentCredits['crew']) {
    if (obj.known_for_department === 'Writing') {
      writers += `${obj.name}, `;
    }
  }
  contentDetails['writers'] = writers.slice(0, -2);

  let directors = '';
  for (let obj of contentCredits['crew']) {
    if (obj.job === 'Director') {
      directors += `${obj.name}, `;
    }
  }
  contentDetails['directors'] = directors.slice(0, -2);

  return { ...contentDetails };
});
