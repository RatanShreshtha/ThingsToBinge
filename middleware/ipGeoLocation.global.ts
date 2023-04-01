import { StorageSerializers } from '@vueuse/core';

import { IpGeoLocation } from '~~/types/portal';

export default defineNuxtRouteMiddleware(async () => {
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
  }
});
