<script setup>
import DefaultTheme from 'vitepress/theme'
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-image>
      <div class="video-wrapper">
        <iframe
          class="hero-video"
          src="https://www.youtube.com/embed/t1qne8uJBAc?si=xP0EMcc6Lb-BPJ-M"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.video-wrapper {
  padding-left: 2rem;
  position: relative;
  z-index: 1;
}

.hero-video {
  width: 560px;
  height: 315px;
  position: relative;
  z-index: 2;
  max-width: 100%;
}

/* Mobile adjustment: push video down by 20px */
@media (max-width: 768px) {
  .hero-video {
    margin-top: 20px;
    padding-bottom: 30px;;
  }
}
</style>

