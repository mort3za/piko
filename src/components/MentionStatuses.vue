<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <Statuses @changePage="(params) => changePage(params)" v-else :statuses="mentionStatuses" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Statuses from "@components/Statuses.vue";
import HeaderBar from "@components/Layout/HeaderBar.vue";
import { useTimelineStore } from "@stores/timeline-module";

export default defineComponent({
  name: "HomePage",
  components: { Statuses, HeaderBar },
  props: {
    statusId: {
      type: String,
      required: true,
    },
  },
  setup() {
    const timelineStore = useTimelineStore();
    const mentionStatuses = computed(() => timelineStore.mentionStatuses);

    return {
      timelineStore,
      mentionStatuses,
      error: "",
    };
  },
  methods: {
    load(params: Partial<TimelinePaginationParams>) {
      this.error = "";
      this.timelineStore
        .mentionStatusesFetch(params, `conversation_id:${this.statusId}`)
        .catch(this.onApiError);
    },
  },
});
</script>
