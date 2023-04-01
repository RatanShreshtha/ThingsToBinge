import useGenres from '~~/composables/useGenres';

export default defineNuxtRouteMiddleware(async (to, from) => {
  let go = false;
  const type = to.params.type;
  const genre = to.params.genre;

  const genres = await useGenres(type);

  for (const genreObj of genres._rawValue) {
    if (genre === genreObj.name) {
      go = true;
    }
  }

  if (!go) {
    return abortNavigation();
  }
});
