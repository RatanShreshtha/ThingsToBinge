<script setup lang="ts">
import { StorageSerializers } from '@vueuse/core';

import { IpGeoLocation } from '~~/types/portal';

definePageMeta({
  middleware: ['validate-type', 'validate-genre']
});

const route = useRoute();
const { genre, type } = route.params;

const cacheIpGeoLocation = useSessionStorage<IpGeoLocation>('cacheIpGeoLocation', null, {
  serializer: StorageSerializers.object
});

const region = cacheIpGeoLocation.value.country;
const language = cacheIpGeoLocation.value.languages.split(',')[0];

const suggestionUri = `/api/suggestion/${genre}/${type}?region=${region}&language=${language}`;

const { data: content, refresh } = await useFetch(suggestionUri, {
  key: `${genre}-${type}-${Date.now()}`
});
</script>

<template>
  <section class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">{{ genre }} {{ type }}</h1>
      <p class="subtitle">This is our suggestion for {{ genre.toLocaleLowerCase() }} {{ type }} to binge on.</p>
      <hr />
      <ContentDetailsCard :content="content">
        <template v-slot:footer>
          <ContentDetailsCardFooter @anotherSuggestion="refresh()"/>
        </template>
      </ContentDetailsCard>
    </div>
  </section>
</template>
