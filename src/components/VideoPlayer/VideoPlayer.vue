<template>
  <div :class="{ 'is-paused': isPaused }">
    <video
      ref="video"
      @play="isPaused = false"
      @pause="isPaused = true"
      :src="getChosenVideo()"
      :poster="mediaItem.media_url_https"
      controls
    ></video>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VideoPlayer",
  props: ["mediaItem"],
  data: () => ({
    isPaused: true,
  }),
  methods: {
    getChosenVideo() {
      return this.mediaItem.video_info.variants.find(
        (variant: any) => variant.content_type === "video/mp4",
      ).url;
    },
  },
});
</script>

<style scoped>
.is-paused {
  @apply relative;
}
.is-paused::after {
  background: url(/icons/play-light.svg) center;
  background-size: 4rem;
  @apply inset-0 absolute bg-no-repeat pointer-events-none bg-opacity-50;
  content: "";
}
</style>
