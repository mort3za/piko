<template>
  <div class="max-w-2xl mx-auto layout--fill">
    <HeaderBar class="mb-4" :back="false" />

    <ErrorMessage v-if="error.message" :error="error" />
    <Statuses v-else :statuses="statuses" />

    <NavigationPrimary @change-navigation="loadTimeline" />
  </div>
</template>

<script lang="ts" setup>
import Statuses from "@components/Statuses.vue";
import HeaderBar from "@components/Layout/HeaderBar.vue";
import { useTimeline } from "@services/timeline";
import { useTimelineStore } from "@stores/timeline-module";
import ErrorMessage from "@components/ErrorMessage.vue";
import NavigationPrimary from "@components/NavigationPrimary/NavigationPrimary.vue";

const props = defineProps({
  screen_name: {
    type: String,
    required: true,
  },
});

const { profileStatusesFetch } = useTimelineStore();
const load = () => profileStatusesFetch(props.screen_name);
const { error, statuses, loadTimeline } = useTimeline(load);
</script>
