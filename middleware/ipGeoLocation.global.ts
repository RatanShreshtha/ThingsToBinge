import { IpGeoLocation } from '~~/types/portal';
import { StorageSerializers } from '@vueuse/core';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const url = `https://ipapi.co/json/`;
  const cacheIpGeoLocation = useSessionStorage<IpGeoLocation>('cacheIpGeoLocation', null, {
    serializer: StorageSerializers.object
  });

  if (!cacheIpGeoLocation.value) {
    const { data, error } = await useFetch<IpGeoLocation>(url);

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch data from ${url}`
      });
    }

    cacheIpGeoLocation.value = data.value as IpGeoLocation;
  } else {
    console.log(`Getting value from cacheIpGeoLocation for ${url}`);
  }
});
