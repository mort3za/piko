<template>
  <video
    class="w-full block"
    ref="video"
    :src="getChosenVideo()"
    :poster="mediaItem.media_url_https"
    controls
    preload="none"
  ></video>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VideoPlayer",
  props: ["mediaItem"],
  methods: {
    getChosenVideo() {
      return this.mediaItem.video_info.variants.find(
        (variant: any) => variant.content_type === "video/mp4",
      ).url;
    },
  },
});
</script>
