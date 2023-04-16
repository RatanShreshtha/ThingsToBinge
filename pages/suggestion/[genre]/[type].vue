<script setup lang="ts">
import useSuggestion from '~~/composables/useSuggestion';
import useContent from '~~/composables/useContent';

definePageMeta({
  middleware: ['validate-type', 'validate-genre']
});

const route = useRoute();
const isActive = ref(false);
const { genre, type } = route.params;

const id = await useSuggestion(genre, type);
const content = await useContent(type, id);

const handleShare = () => {
  isActive.value = !isActive.value;
};

const handleRefresh = () => {
  reloadNuxtApp({ ttl: 1000 });
};
</script>

<template>
  <section class="hero-body">
    <LazyShareModal
      v-if="isActive"
      :type="type"
      :is-active="isActive"
      :content="content"
      @close-share="isActive = !isActive"
    />
    <div class="container has-text-centered">
      <h1 class="title">{{ genre }} {{ type }}</h1>
      <p class="subtitle">This is our suggestion for {{ genre.toLocaleLowerCase() }} {{ type }} to binge on.</p>
      <hr />

      <ContentCard :content="content">
        <template #footer>
          <ContentCardFooter @refresh="handleRefresh()" @share="handleShare()" />
        </template>
      </ContentCard>
    </div>
  </section>
</template>
