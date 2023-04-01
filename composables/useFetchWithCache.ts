import { StorageSerializers } from '@vueuse/core';

export default async <T>(url: string) => {
  const cache = useSessionStorage<T>(url, null, {
    serializer: StorageSerializers.object
  });

  if (!cache.value) {
    const { data, error } = await useFetch<T>(url);

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch data from ${url}`
      });
    }

    cache.value = data.value as T;
  }

  return cache;
};
