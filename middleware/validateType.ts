export default defineNuxtRouteMiddleware((to) => {
  const type = to.params.type;

  if (!(type === 'tv' || type === 'movie')) {
    return abortNavigation();
  }
});
