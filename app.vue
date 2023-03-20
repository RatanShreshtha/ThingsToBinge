<script setup>
const { gtag: gtagOpts } = useRuntimeConfig().public
const gtag = useGtag()

gtag('js', new Date());
gtag('config', gtagOpts.id);
</script>

<template>
  <AppNav />
  <NuxtPage />
  <AppFooter />
</template>
