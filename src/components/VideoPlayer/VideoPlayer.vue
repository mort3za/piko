<template>
  <div class="relative">
    <div class="absolute top-4 right-4 flex flex-col items-end gap-4 z-10">
      <button
        v-if="!playing"
        type="button"
        class="video-info"
        @click="isSettingsVisible = !isSettingsVisible"
      >
        <IconSettings />
      </button>
      <div v-if="!played" class="video-info">
        {{ videoLengthDisplay }}
      </div>
    </div>
    <dialog :open="isSettingsVisible" class="z-20 top-8 bg-white">
      <div class="flex gap-8">
        <button
          type="button"
          class="button button--sm"
          v-for="(bitrate, i) in bitrates"
          :key="i"
          @click="setCurrentBitrateIndex(i)"
        >
          {{ bitrateButtonText(bitrate) }}
        </button>
      </div>
    </dialog>
    <video
      class="w-full block video dark:bg-slate-700"
      ref="video"
      :src="getChosenVideo(currentBitrateIndex)"
      :poster="mediaItem.media_url_https"
      controls
      :preload="shouldPreload"
      :loop="shouldLoop"
      v-bind="$attrs"
      @play="played = true"
      @playing="playing = true"
      @pause="playing = false"
    ></video>
  </div>
</template>

<script lang="ts" setup>
import { MediaEntity } from "twitter-d";
import { onBeforeUnmount, onMounted, ref } from "vue";
import IconSettings from "@assets/icons/settings.svg?component";
import { computed } from "@vue/reactivity";

const props = defineProps({
  mediaItem: {
    type: Object as () => MediaEntity,
    required: true,
  },
});

const isSettingsVisible = ref(false);
const currentBitrateIndex = ref(0);

const shouldPreload = "none";
const videoLength = (props.mediaItem?.video_info as any)?.duration_millis;
const videoLengthDisplay =
  videoLength && `${Math.floor(videoLength / 1000 / 60)}:${Math.floor((videoLength / 1000) % 60)}`;
const shouldLoop = videoLength <= 15000;
const played = ref(false);
const playing = ref(false);
const isDurationInfoVisible = computed(() => !(played || playing));

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

const bitrates = computed(() => {
  // @ts-ignore
  return props?.mediaItem.video_info.variants
    .filter((variant) => variant.content_type === "video/mp4")
    .sort((a: any, b: any) => a.bitrate - b.bitrate);
});

function getChosenVideo(index: number = 0): string {
  // @ts-ignore
  return bitrates.value.at(index).url;
}

function bitrateButtonText({ bitrate }: any): string {
  return `${bitrate / 1000}kbps`;
}

function setCurrentBitrateIndex(index: number) {
  currentBitrateIndex.value = index;
  isSettingsVisible.value = false;
}
</script>

<style scoped>
.video {
  max-height: calc(100vh - 48px);
}
.video-info {
  @apply bg-white bg-opacity-80 dark:bg-slate-700 dark:bg-opacity-100 px-1 rounded-lg flex items-center justify-center min-w-[48px] min-h-[48px];
}
</style>
