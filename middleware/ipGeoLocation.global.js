export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) {
    const ipGeolocationData = useLocalStorage('ip-geo-location-data', {});

    if (Object.keys(ipGeolocationData.value).length === 0) {
      const ipGeolocationUri = `https://ipapi.co/json/`;
      const ipGeolocationResp = await $fetch(ipGeolocationUri);

      ipGeolocationData.value = ipGeolocationResp;
    }
  }
});
