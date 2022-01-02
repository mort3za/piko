<template>
  <div>
    <div class="max-w-2xl mx-auto">
      <ComposeTweet />

      <div v-if="error">{{ error }}</div>
      <Statuses @changePage="(params) => changePage(params)" v-else :statuses="latestStatuses" />
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
    load(params: Partial<TimelinePaginationParams>) {
      this.error = "";
      this.timelineStore.latestStatusesFetch(params).catch(this.onApiError);
    },
    changePage(params: Partial<TimelinePaginationParams>) {
      this.$router.push({
        name: this.$route.name as string,
        query: { max_id: params.max_id as string, since_id: params.since_id as string },
      });
      this.load(params);
    },
  },
  created() {
    const since_id = this.$route.query.since_id as string;
    const max_id = this.$route.query.max_id as string;
    const params: Partial<TimelinePaginationParams> = {
      ...(since_id && { since_id }),
      ...(max_id && { max_id }),
    };
    this.load(params);
  },
});
</script>
