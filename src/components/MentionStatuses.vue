<template>
  <div class="flex-grow">
    <ErrorMessage v-if="error.message" :error="error" />
    <Statuses v-else :statuses="statuses" />

    <!-- <NavigationPrimary /> -->
  </div>
</template>

<script lang="ts" setup>
// import { computed } from "vue";
import { useTimeline } from "@services/timeline";
import { useTimelineStore } from "@stores/timeline-module";
import Statuses from "@components/Statuses.vue";
import ErrorMessage from "./ErrorMessage.vue";
// import NavigationPrimary from "./NavigationPrimary/NavigationPrimary.vue";

const props = defineProps({
  statusId: {
    type: String,
    required: true,
  },
});

const timelineStore = useTimelineStore();

function load(tParams: Partial<TimelinePaginationParams>) {
  return timelineStore.mentionStatusesFetch(tParams, `conversation_id:${props.statusId}`);
}

const { error, statuses } = useTimeline(load);
</script>
