import { StorageSerializers } from '@vueuse/core';

import { IpGeoLocation } from '~~/types/portal';

export default async (genreSlug: string, typeSlug: string) => {
  const cacheIpGeoLocation = useSessionStorage<IpGeoLocation>('cacheIpGeoLocation', null, {
    serializer: StorageSerializers.object
  });

  const region = cacheIpGeoLocation.value.country;
  const language = cacheIpGeoLocation.value.languages.split(',')[0];
  const url = `/api/suggestion/${genreSlug}/${typeSlug}?region=${region}&language=${language}`;
  const { data, error } = await useFetch<T>(url);

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Could not fetch data from ${url}`
    });
  }

  return data.value;
};
