<template>
  <div class="max-w-2xl mx-auto layout--fill">
    <HeaderBar class="mb-4" :back="false" />

    <ErrorMessage v-if="error.message" :error="error" />
    <Statuses v-else :statuses="statuses" />

    <NavigationPrimary />
  </div>
</template>

<script lang="ts" setup>
import Statuses from "@components/Statuses.vue";
import HeaderBar from "@components/Layout/HeaderBar.vue";
import { useTimeline } from "@services/timeline";
import { useTimelineStore } from "@stores/timeline-module";
import { useRoute } from "vue-router";
import ErrorMessage from "@components/ErrorMessage.vue";
import NavigationPrimary from "@components/NavigationPrimary/NavigationPrimary.vue";

const timelineStore = useTimelineStore();

function load(params: Partial<TimelinePaginationParams>) {
  const route = useRoute();
  const screen_name = route.params.screen_name as string;

  return timelineStore.profileStatusesFetch(params, screen_name);
}

const { error, statuses } = useTimeline(load);
</script>
