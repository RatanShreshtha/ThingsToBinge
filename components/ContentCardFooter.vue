<script setup>
import { useSuggestionStore } from '~/stores/suggestion';
const store = useSuggestionStore();
const { openSharePopup } = store;

const handleRefresh = () => {
  reloadNuxtApp({ ttl: 1000 });
};
</script>

<template>
  <footer class="card-footer">
    <a href="#" class="card-footer-item" @click="handleRefresh()">
      <span class="icon-text">
        <span class="icon">
          <i class="fa-solid fa-rotate"></i>
        </span>
        <span>Refresh</span>
      </span>
    </a>
    <a href="#" class="card-footer-item" @click="openSharePopup()">
      <span class="icon-text">
        <span class="icon">
          <i class="fa-solid fa-share"></i>
        </span>
        <span>Share</span>
      </span>
    </a>
  </footer>
</template>
