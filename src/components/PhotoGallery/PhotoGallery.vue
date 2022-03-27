<template>
  <div class="gallery grid grid-cols-2" :class="{ 'grid-rows-2': media.length > 2 }">
    <img
      class="h-full object-cover"
      v-for="mediaItem in media"
      :src="mediaItem.media_url_https"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PhotoGallery",
  props: ["media"],
});
</script>

<style scoped>
.gallery {
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
</style>
