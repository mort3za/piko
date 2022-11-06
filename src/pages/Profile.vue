<template>
  <div class="page max-w-2xl mx-auto layout--fill">
    <HeaderBar class="mb-4" />

    <ErrorMessage v-if="error.message" :error="error" />
    <Statuses class="mt-auto" v-else :statuses="statuses" :loading="loading" />

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
import { useRoute } from "vue-router";

const route = useRoute();
const { profileStatusesFetch } = useTimelineStore();
const load = () => profileStatusesFetch(route.params.username as string);
const { error, loading, statuses, loadTimeline } = useTimeline(load);
</script>
