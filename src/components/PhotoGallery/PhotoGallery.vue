<template>
  <div class="gallery grid" :class="rootClasses">
    <img
      class="h-full object-contain"
      v-for="(mediaItem, index) in media"
      :key="mediaItem.id"
      :src="mediaItem.media_url_https"
      alt=""
      :class="`gallery-image--${index}`"
      loading="lazy"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { MediaEntity } from "twitter-d";

const props = defineProps({
  media: {
    type: Array as () => MediaEntity[],
    required: true,
  },
});

const rootClasses = computed(() => {
  switch (props.media.length) {
    case 2:
      return "grid-cols-2 grid-rows-1";
    case 3:
      return "grid-cols-2 grid-rows-2 gallery--items-3";
    case 4:
      return "grid-cols-2 grid-rows-2";
    default:
      return "";
  }
});
</script>

<style scoped>
.gallery {
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.gallery--items-3 .gallery-image--0 {
  @apply col-span-2;
}
</style>
