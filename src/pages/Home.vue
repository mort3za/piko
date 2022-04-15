<template>
  <div class="layout--fill max-w-2xl mx-auto">
    <HeaderBar class="mb-4" :back="false" @clicked-logo="loadTimeline" />

    <div v-if="error">{{ error }}</div>
    <Statuses v-else :statuses="latestStatuses" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import Statuses from "@components/Statuses.vue";
import HeaderBar from "@components/Layout/HeaderBar.vue";
import { useTimeline } from "@services/timeline";
import { useTimelineStore } from "@stores/timeline-module";

const timelineStore = useTimelineStore();

function load(tParams: Partial<TimelinePaginationParams>) {
  return timelineStore.latestStatusesFetch(tParams);
}

const { error, loadTimeline } = useTimeline(load, { exclude_replies: true });

const latestStatuses = computed(() => timelineStore.latestStatuses);
</script>
