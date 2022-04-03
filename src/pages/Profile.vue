<template>
  <div class="max-w-2xl mx-auto layout--fill">
    <HeaderBar class="mb-4" :back="false" />

    <div v-if="error">{{ error }}</div>
    <Statuses @changePage="(params) => changePage(params)" v-else :statuses="profileStatuses" />
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
  setup() {
    const timelineStore = useTimelineStore();
    const profileStatuses = computed(() => timelineStore.profileStatuses);

    return {
      timelineStore,
      profileStatuses,
      error: "",
    };
  },
  methods: {
    load(params: Partial<TimelinePaginationParams>) {
      this.error = "";

      const screen_name = this.$route.params.screen_name as string;
      if (!screen_name) {
        this.error = "Screen name is not defined, please refresh!";
        return;
      }
      this.timelineStore.profileStatusesFetch(params, screen_name).catch(this.onApiError);
    },
  },
});
</script>
