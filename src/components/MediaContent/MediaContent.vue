<template>
  <div v-for="mediaItem in media">
    <div v-if="mediaItem.type === 'photo'">
      <img :src="mediaItem.media_url_https" alt="" />
    </div>
    <div v-else-if="mediaItem.type === 'video'">
      <VideoPlayer :media-item="mediaItem" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VideoPlayer from "@components/VideoPlayer/VideoPlayer.vue";

export default defineComponent({
  name: "MediaContent",
  props: ["media"],
  components: { VideoPlayer },
});
</script>

<style scoped></style>
