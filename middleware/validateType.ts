export default defineNuxtRouteMiddleware((to, from) => {
  const type = to.params.type;

  if (!(type === 'tv' || type === 'movie')) {
    return abortNavigation();
  }
});
