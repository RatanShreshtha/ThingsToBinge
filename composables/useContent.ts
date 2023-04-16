import { StorageSerializers, useDateFormat } from '@vueuse/core';
import { usePrecision } from '@vueuse/math';

import { IpGeoLocation } from '~~/types/portal';

export default async (typeSlug: string, contentId: string) => {
  const cacheIpGeoLocation = useSessionStorage<IpGeoLocation>('cacheIpGeoLocation', null, {
    serializer: StorageSerializers.object
  });

  const region = cacheIpGeoLocation.value.country;
  const language = cacheIpGeoLocation.value.languages.split(',')[0];
  const url = `/api/content/${typeSlug}/${contentId}?region=${region}&language=${language}`;
  const { data, error } = await useFetch<T>(url);

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Could not fetch data from ${url}`
    });
  }

  data.value.genres = data.value.genres.map((genre) => genre.name).join(', ');
  data.value.spoken_languages = data.value.spoken_languages
    .map((spokenLanguage) => spokenLanguage.english_name)
    .join(', ');
  data.value.production_companies = data.value.production_companies
    .map((productionCompany) => `${productionCompany.name}(${productionCompany.origin_country})`)
    .join(', ');

  data.value.actors = data.value.actors.map((actor) => actor.name).join(', ');
  data.value.actresses = data.value.actresses.map((actress) => actress.name).join(', ');

  data.value.writers = data.value.writers.map((writer) => writer.name).join(', ');
  data.value.directors = data.value.directors.map((director) => director.name).join(', ');

  data.value.vote_average = usePrecision(data.value.vote_average, 1);
  data.value.release_date = useDateFormat(data.value.release_date, 'DD MMMM, YYYY');

  return data.value;
};
