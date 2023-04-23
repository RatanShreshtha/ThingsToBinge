<script setup>
import { storeToRefs } from 'pinia';
import { useSuggestionStore } from '~/stores/suggestion';
const store = useSuggestionStore();
const { closeSharePopup } = store;

const { sharePopup, suggestedContent } = storeToRefs(store);
const {
  params: { type }
} = useRoute();

const socialMedias = [
  { network: 'email', name: 'Email', icon: 'fa-regular fa-envelope', color: '#333333' },
  { network: 'facebook', name: 'Facebook', icon: 'fa-brands fa-facebook', color: '#1877f2' },
  { network: 'hackernews', name: 'HackerNews', icon: 'fa-brands fa-hacker-news', color: '#ff6600' },
  { network: 'linkedin', name: 'LinkedIn', icon: 'fa-brands fa-linkedin', color: '#007bb5' },
  { network: 'reddit', name: 'Reddit', icon: 'fa-brands fa-reddit', color: '#ff4500' },
  { network: 'telegram', name: 'Telegram', icon: 'fa-brands fa-telegram-plane', color: '#0088cc' },
  { network: 'twitter', name: 'Twitter', icon: 'fa-brands fa-twitter', color: '#1da1f2' },
  { network: 'whatsapp', name: 'Whatsapp', icon: 'fa-brands fa-whatsapp', color: '#25d366' }
];

const shareTitle = computed(() => {
  return suggestedContent.value.name ? suggestedContent.value.name : suggestedContent.value.title;
});

const shareUrl = computed(() => {
  return `${window.location.origin}/share/${type}/${suggestedContent.value.id}`;
});
</script>

<template>
  <article class="modal" :class="{ 'is-active': sharePopup }">
    <section class="modal-background" @click="closeSharePopup()"></section>
    <section class="modal-content">
      <div class="box">
        <h1 class="title">Share</h1>
        <p class="subtitle">You can share this content with anyone using following</p>
        <hr />
        <nav class="level">
          <div v-for="socialMedia in socialMedias" :key="socialMedia.network" class="level-item has-text-centered">
            <div>
              <p class="title">
                <ShareNetwork
                  :network="socialMedia.network"
                  :url="shareUrl"
                  :title="shareTitle"
                  :description="suggestedContent.overview"
                >
                  <span class="icon is-large">
                    <i :class="socialMedia.icon" :style="`color: ${socialMedia.color};`"></i>
                  </span>
                </ShareNetwork>
              </p>
              <p class="heading">{{ socialMedia.name }}</p>
            </div>
          </div>
        </nav>
      </div>
    </section>
    <button class="modal-close is-large" aria-label="close" @click="closeSharePopup()"></button>
  </article>
</template>
