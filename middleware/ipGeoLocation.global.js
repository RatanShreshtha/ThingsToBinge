export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) {
    const ipGeolocationData = useLocalStorage('ip-geo-location-data', {});

    if (Object.keys(ipGeolocationData.value).length === 0) {
      const ipUri = "http://api.ipify.org?format=json";
      const ipResp = await $fetch(ipUri);

      const ipGeolocationUri = `https://ipapi.co/${ipResp.ip}/json/`;
      const ipGeolocationResp = await $fetch(ipGeolocationUri);

      ipGeolocationData.value = ipGeolocationResp
    }
  }
});