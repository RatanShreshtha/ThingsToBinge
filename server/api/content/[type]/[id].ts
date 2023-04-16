export default defineEventHandler(async (event) => {
  const queryParams = getQuery(event);
  const { id, type } = event.context.params;
  const { tmdbApiKey, tmdbApiBaseUrl } = useRuntimeConfig();

  const params = {
    api_key: tmdbApiKey,
    region: queryParams?.region || 'IN',
    'vote_count.gte': 1000,
    'vote_average.gte': 6.5,
    language: queryParams?.language || 'en-IN'
  };

  const suggestionDetailsUri = `${tmdbApiBaseUrl}/${type}/${id}?api_key=${tmdbApiKey}`;
  const suggestionCreditsUri = `${tmdbApiBaseUrl}/${type}/${id}/credits?api_key=${tmdbApiKey}`;
  const suggestionWatchProvidersUri = `${tmdbApiBaseUrl}/${type}/${id}/watch/providers?api_key=${tmdbApiKey}`;

  const data = await Promise.all([
    $fetch(suggestionDetailsUri),
    $fetch(suggestionCreditsUri),
    $fetch(suggestionWatchProvidersUri)
  ]);

  const [suggestionDetails, suggestionCredits, suggestionWatchProviders] = data;

  const suggestion = { ...suggestionDetails };

  suggestion.actresses = suggestionCredits.cast.filter((cast) => cast.gender === 1);

  suggestion.actors = suggestionCredits.cast.filter((cast) => cast.gender === 2);

  suggestion.writers = suggestionCredits.crew.filter((crew) => crew.known_for_department === 'Writing');
  suggestion.directors = suggestionCredits.crew.filter((crew) => crew.job === 'Director');

  if (params.region in suggestionWatchProviders.results) {
    const { buy = [], rent = [], flatrate = [] } = suggestionWatchProviders.results[params.region];
    suggestion.watch_providers = { buy, rent, flatrate };
  }

  return suggestion;
});
