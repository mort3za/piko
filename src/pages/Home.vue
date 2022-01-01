<template>
  <div>
    <div class="max-w-2xl mx-auto">
      <ComposeTweet />

      <div v-if="error">{{ error }}</div>
      <Statuses v-else :statuses="latestStatuses" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Statuses from "@components/Statuses.vue";
import ComposeTweet from "@components/ComposeTweet.vue";
import { useTimelineStore } from "@stores/timeline-module";
import { apiErrors } from "@mixins/apiErrors";

export default defineComponent({
  name: "HomePage",
  components: { Statuses, ComposeTweet },
  mixins: [apiErrors],
  setup() {
    const timelineStore = useTimelineStore();
    const latestStatuses = computed(() => timelineStore.latestStatuses);

    return {
      timelineStore,
      latestStatuses,
      error: "",
    };
  },
  methods: {
    init() {
      this.error = "";
      this.timelineStore.latestStatusesFetch({ count: 5 }).catch(this.onApiError);
    },
  },
  created() {
    this.init();
  },
});
</script>
