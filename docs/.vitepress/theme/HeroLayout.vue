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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  padding: 2rem 1rem;
  box-sizing: border-box;
  width: 100%;
}

.hero-video {
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  border: none;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Mobile tweaks */
@media (max-width: 768px) {
  .video-wrapper {
    margin-top: 10%;

    min-height: auto;
  }
}
</style>
