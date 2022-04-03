<template>
  <div class="layout--fill max-w-2xl mx-auto">
    <HeaderBar class="mb-4" :back="false" />

    <div v-if="error">{{ error }}</div>
    <Statuses @changePage="(params) => changePage(params)" v-else :statuses="latestStatuses" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Statuses from "@components/Statuses.vue";
import HeaderBar from "@components/Layout/HeaderBar.vue";
import { useTimelineStore } from "@stores/timeline-module";
import { apiErrors } from "@mixins/apiErrors";
import { timeline } from "@mixins/timeline";

export default defineComponent({
  name: "HomePage",
  components: { Statuses, HeaderBar },
  mixins: [apiErrors, timeline],
  timelineParams: {
    exclude_replies: true,
  },
  setup() {
    const timelineStore = useTimelineStore();
    const latestStatuses = computed(() => timelineStore.latestStatuses);

    return {
      timelineStore,
      latestStatuses,
    };
  },
  methods: {
    load(params: Partial<TimelinePaginationParams>) {
      this.error = "";
      this.timelineStore.latestStatusesFetch(params).catch(this.onApiError);
    },
  },
});
</script>
