<template>
  <template v-if="mediaType === 'photo'">
    <PhotoGallery :media="media" />
  </template>
  <template v-else-if="mediaType === 'video'">
    <VideoPlayer v-for="mediaItem in media" :media-item="mediaItem" />
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VideoPlayer from "@components/VideoPlayer/VideoPlayer.vue";
import PhotoGallery from "@components/PhotoGallery/PhotoGallery.vue";

export default defineComponent({
  name: "MediaContent",
  props: ["media"],
  components: { VideoPlayer, PhotoGallery },
  computed: {
    mediaType() {
      return this.media[0].type === "photo" ? "photo" : "video";
    },
  },
});
</script>

<style scoped></style>
