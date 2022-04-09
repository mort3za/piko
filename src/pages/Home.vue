<template>
  <div class="layout--fill max-w-2xl mx-auto">
    <HeaderBar class="mb-4" :back="false" />

    <div v-if="error">{{ error }}</div>
    <Statuses
      @changePage="(params) => changePage(generateParams(params))"
      v-else
      :statuses="latestStatuses"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import Statuses from "@components/Statuses.vue";
import HeaderBar from "@components/Layout/HeaderBar.vue";
import { useTimeline } from "@mixins/timeline";

function generateParams(params: Partial<TimelinePaginationParams> = {}) {
  return {
    exclude_replies: true,
    ...params,
  };
}
const { timelineStore, changePage, error } = useTimeline(generateParams());

const latestStatuses = computed(() => timelineStore.latestStatuses);
</script>
