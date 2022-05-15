<template>
  <div class="page layout--fill max-w-2xl mx-auto">
    <HeaderBar class="mb-4" @clicked-home="loadTimeline" />

    <ErrorMessage v-if="error.message" :error="error" />
    <Statuses v-else :statuses="statuses" :loading="loading" />

    <NavigationPrimary @change-navigation="loadTimeline" />
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

const { latestStatusesFetch: load } = useTimelineStore();
const { loading, error, statuses, loadTimeline } = useTimeline(load);
</script>
