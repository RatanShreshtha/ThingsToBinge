import useFetchWithCache from './useFetchWithCache';
import { StorageSerializers } from '@vueuse/core';

import { IpGeoLocation } from '~~/types/portal';

export default async (typeSlug: string) => {
  const cacheIpGeoLocation = useSessionStorage<IpGeoLocation>('cacheIpGeoLocation', null, {
    serializer: StorageSerializers.object
  });

  const region = cacheIpGeoLocation.value.country;
  const language = cacheIpGeoLocation.value.languages.split(',')[0];
  const url = ``;
  const { data, error } = await useFetch<T>(url);

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Could not fetch data from ${url}`
    });
  }
};
