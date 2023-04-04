<script setup lang="ts">
import { StorageSerializers } from '@vueuse/core';

import { IpGeoLocation } from '~~/types/portal';

definePageMeta({
  middleware: ['validate-type']
});

const route = useRoute();
const { id, type } = route.params;

const cacheIpGeoLocation = useSessionStorage<IpGeoLocation>('cacheIpGeoLocation', null, {
  serializer: StorageSerializers.object
});

const region = cacheIpGeoLocation.value.country;
const language = cacheIpGeoLocation.value.languages.split(',')[0];

const suggestionUri = `/api/share/${type}/${id}?region=${region}&language=${language}`;

const { data: content } = await useFetch(suggestionUri, {
  key: `${id}-${type}-${Date.now()}`
});
</script>

<template>
  <section class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">Shared To You</h1>
      <p class="subtitle">This is a suggestion for you to binge on by someone.</p>
      <hr />
      <ContentDetailsCard :content="content" />
    </div>
  </section>
</template>
