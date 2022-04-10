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

<script lang="ts" setup>
import { MediaEntity } from "twitter-d";
import { onBeforeUnmount, onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  mediaItem: {
    type: Object as () => MediaEntity,
    required: true,
  },
});

const video = ref(null as unknown as HTMLVideoElement);
// pause video when it's not in viewport
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio != 1 && !video.value.paused) {
        video.value.pause();
      }
    });
  },
  { threshold: 0 },
);
onMounted(() => {
  observer.observe(video.value);
});
onBeforeUnmount(() => {
  observer.unobserve(video.value);
});

function getChosenVideo() {
  // @ts-ignore
  return props.mediaItem.video_info.variants.find((variant) => variant.content_type === "video/mp4")
    .url;
}
</script>
