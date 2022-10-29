<template>
  <div class="gallery grid" :class="rootClasses">
    <img
      class="object-contain max-h-[88vh]"
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
import { components } from "@twitter";

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
      return "grid-cols-2 gallery--items-3";
    case 4:
      return "grid-cols-2";
    default:
      return "";
  }
});
</script>

<style scoped>
.gallery {
  grid-column-gap: 1px;
  grid-row-gap: 1px;
}
.gallery--items-3 .gallery-image--0 {
  @apply col-span-2;
}
</style>
