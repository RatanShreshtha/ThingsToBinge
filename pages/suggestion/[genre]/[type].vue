<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useSuggestionStore } from '~/stores/suggestion';
import useContent from '~~/composables/useContent';
import useSuggestion from '~~/composables/useSuggestion';
const store = useSuggestionStore();
const { storeSuggestedContent } = store;
const { sharePopup } = storeToRefs(store);

definePageMeta({
  middleware: ['validate-type', 'validate-genre']
});

const route = useRoute();
const { genre, type } = route.params;

const id = await useSuggestion(genre, type);
const content = await useContent(type, id);

storeSuggestedContent(content);
</script>

<template>
  <section class="hero-body">
    <div class="container is-fluid has-text-centered">
      <h1 class="title is-1">{{ genre }} {{ type }}</h1>
      <p class="subtitle is-3">This is our suggestion for {{ genre.toLocaleLowerCase() }} {{ type }} to binge on.</p>
      <hr />

      <LazyShareModal v-if="sharePopup" />

      <ContentCard :content="content">
        <template #footer>
          <ContentCardFooter />
        </template>
      </ContentCard>
    </div>
  </section>
</template>
