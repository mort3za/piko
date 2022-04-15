<template>
  <div class="layout--fill max-w-2xl mx-auto">
    <HeaderBar class="mb-4" :back="false" @clicked-home="loadTimeline" />

    <ErrorMessage v-if="error.message" :error="error" />
    <Statuses v-else :statuses="statuses" :loading="loading" />

    <NavigationPrimary @clicked-home="loadTimeline" />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import Statuses from "@components/Statuses.vue";
import HeaderBar from "@components/Layout/HeaderBar.vue";
import { useTimeline } from "@services/timeline";
import { useTimelineStore } from "@stores/timeline-module";
import NavigationPrimary from "@components/NavigationPrimary/NavigationPrimary.vue";
const ErrorMessage = defineAsyncComponent(() => import("@components/ErrorMessage.vue"));

const timelineStore = useTimelineStore();

function load(tParams: Partial<TimelinePaginationParams>) {
  return timelineStore.latestStatusesFetch(tParams);
}

const { loading, error, statuses, loadTimeline } = useTimeline(load, { exclude_replies: true });
</script>
