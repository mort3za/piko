<template>
  <div class="max-w-2xl mx-auto layout--fill">
    <HeaderBar class="mb-4" :back="false" />

    <div v-if="error">{{ error }}</div>
    <Statuses v-else :statuses="profileStatuses" :key="timelineKey" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import Statuses from "@components/Statuses.vue";
import HeaderBar from "@components/Layout/HeaderBar.vue";
import { useTimeline } from "@mixins/timeline";
import { useTimelineStore } from "@stores/timeline-module";
import { useRoute } from "vue-router";

const timelineStore = useTimelineStore();

function load(params: Partial<TimelinePaginationParams>) {
  const route = useRoute();
  const screen_name = route.params.screen_name as string;

  return timelineStore.profileStatusesFetch(params, screen_name);
}

const { timelineKey, error } = useTimeline(load);

const profileStatuses = computed(() => timelineStore.profileStatuses);
</script>
