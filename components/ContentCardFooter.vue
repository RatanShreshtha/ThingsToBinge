<script setup>
defineEmits(['refresh', 'share']);
</script>

<template>
  <footer class="card-footer">
    <a href="#" class="card-footer-item" @click="$emit('refresh')">
      <span class="icon-text">
        <span class="icon">
          <i class="fa-solid fa-rotate"></i>
        </span>
        <span>Another Suggestion</span>
      </span>
    </a>
    <a href="#" class="card-footer-item" @click="$emit('share')">
      <span class="icon-text">
        <span class="icon">
          <i class="fa-solid fa-share"></i>
        </span>
        <span>Share</span>
      </span>
    </a>
  </footer>
</template>
