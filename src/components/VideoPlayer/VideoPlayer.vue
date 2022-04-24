<template>
  <div class="relative">
    <div v-if="!played" class="absolute top-0 right-0 bg-white bg-opacity-80 px-1 rounded-bl-md">
      {{ videoLengthDisplay }}
    </div>
    <video
      class="w-full block"
      ref="video"
      :src="getChosenVideo()"
      :poster="mediaItem.media_url_https"
      controls
      :preload="shouldPreload"
      :loop="shouldLoop"
      v-bind="$attrs"
      @play="played = true"
    ></video>
  </div>
</template>

<script lang="ts" setup>
import { MediaEntity } from "twitter-d";
import { onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  mediaItem: {
    type: Object as () => MediaEntity,
    required: true,
  },
});

// todo: check navigator.connection
const shouldPreload = "none";
const videoLength = (props.mediaItem?.video_info as any)?.duration_millis;
const videoLengthDisplay =
  videoLength && `${Math.floor(videoLength / 1000 / 60)}:${Math.floor((videoLength / 1000) % 60)}`;
const shouldLoop = videoLength <= 15000;
const played = ref(false);

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
  if (!video.value) return;
  observer.observe(video.value);
});
onBeforeUnmount(() => {
  if (!video.value) return;
  observer.unobserve(video.value);
});

function getChosenVideo() {
  // @ts-ignore
  return props.mediaItem.video_info.variants.find((variant) => variant.content_type === "video/mp4")
    .url;
}
</script>
