export default defineEventHandler(async (event) => {
    const queryParams = getQuery(event);
    const { id, type } = event.context.params;
    const { tmdbApiKey, tmdbApiBaseUrl } = useRuntimeConfig();

    const params = {
      api_key: tmdbApiKey,
      'vote_count.gte': 1000,
      'vote_average.gte': 6.5
    };
  
    params.region = queryParams?.region || 'IN';
    params.language = queryParams?.language || 'en-IN';
  
    const shareDetailsUri = `${tmdbApiBaseUrl}/${type}/${id}?api_key=${tmdbApiKey}`;
    const shareCreditsUri = `${tmdbApiBaseUrl}/${type}/${id}/credits?api_key=${tmdbApiKey}`;
    const shareWatchProvidersUri = `${tmdbApiBaseUrl}/${type}/${id}/watch/providers?api_key=${tmdbApiKey}`;
  
    const data = await Promise.all([
      $fetch(shareDetailsUri),
      $fetch(shareCreditsUri),
      $fetch(shareWatchProvidersUri)
    ]);

  
    const [shareDetails, shareCredits, shareWatchProviders] = data;
  
    const share = { ...shareDetails };
  
    share['genres'] = shareDetails['genres'].map((genre) => genre.name).join(', ');
    share['spoken_languages'] = shareDetails['spoken_languages']
      .map((spokenLanguages) => spokenLanguages.english_name)
      .join(', ');
    share['production_companies'] = shareDetails['production_companies']
      .map((productionCompanies) => `${productionCompanies.name} (${productionCompanies.origin_country})`)
      .join(', ');
  
    share['actresses'] = shareCredits['cast']
      .filter((cast) => cast.gender === 1)
      .map((cast) => cast.name)
      .join(', ');
    share['actors'] = shareCredits['cast']
      .filter((cast) => cast.gender === 2)
      .map((cast) => cast.name)
      .join(', ');
    share['writers'] = shareCredits['crew']
      .filter((crew) => crew.known_for_department === 'Writing')
      .map((crew) => crew.name)
      .join(', ');
    share['directors'] = shareCredits['crew']
      .filter((crew) => crew.job === 'Director')
      .map((crew) => crew.name)
      .join(', ');
  
    if (params.region in shareWatchProviders['results']) {
      let { buy = [], rent = [], flatrate = [] } = shareWatchProviders['results'][params.region];
      share['watch_providers'] = { buy, rent, flatrate };
    }
  
    return share;
  });
  