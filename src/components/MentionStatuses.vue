<template>
  <!-- <div class="flex flex-grow items-center" v-bind="$attrs">
    <ErrorMessage v-if="error.message" :error="error" />
    <Statuses class="mt-auto" v-else :statuses="statuses" :loading="loading" title="Replies" />
  </div>
  <NavigationPrimary @change-navigation="loadTimeline" /> -->
</template>

<script lang="ts" setup>
// import { useTimeline } from "@services/timeline";
// import { useTimelineStore } from "@stores/timeline-module";
// import Statuses from "@components/Statuses.vue";
// import ErrorMessage from "./ErrorMessage.vue";
// import NavigationPrimary from "@components/NavigationPrimary/NavigationPrimary.vue";

// const props = defineProps({
//   statusId: {
//     type: String,
//     required: true,
//   },
// });

// const { mentionStatusesFetch } = useTimelineStore();
// const load = () => mentionStatusesFetch(`conversation_id:${props.statusId}`);
// const { error, loading, statuses, loadTimeline } = useTimeline(load);
</script>
