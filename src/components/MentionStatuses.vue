<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <Statuses v-else :statuses="mentionStatuses" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useTimeline } from "@services/timeline";
import { useTimelineStore } from "@stores/timeline-module";
import Statuses from "@components/Statuses.vue";

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

const { error } = useTimeline(load);

const mentionStatuses = computed(() => timelineStore.mentionStatuses);
</script>
