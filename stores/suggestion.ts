import { defineStore } from 'pinia';
import { Content } from '~/types/portal';

export const useSuggestionStore = defineStore('suggestionStore', () => {
  const sharePopup = ref(false);
  const suggestedContent = ref<Content>({});

  const storeSuggestedContent = (content) => {
    suggestedContent.value = content;
  };

  const openSharePopup = () => {
    sharePopup.value = true;
  };

  const closeSharePopup = () => {
    sharePopup.value = false;
  };

  return {
    sharePopup,
    suggestedContent,
    storeSuggestedContent,
    openSharePopup,
    closeSharePopup
  };
});
