<template>
  <div>
    <img v-for="mediaItem in media" :src="mediaItem.media_url_https" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MediaContent",
  props: ["media"],
});
</script>

<style scoped></style>
