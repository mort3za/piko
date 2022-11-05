<template>
  <div>
    <PhotoGallery :photos="status.photos" />
    <VideoPlayer v-for="videoItem in status.videos" :key="videoItem.media_key" :video="videoItem" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VideoPlayer from "@components/VideoPlayer/VideoPlayer.vue";
import PhotoGallery from "@components/PhotoGallery/PhotoGallery.vue";
import { Tweet } from "@services/tweet";

export default defineComponent({
  name: "MediaContent",
  props: {
    status: {
      type: Object as () => Tweet,
      required: true,
    },
  },
  components: { VideoPlayer, PhotoGallery },
  computed: {},
});
</script>

<style scoped></style>
