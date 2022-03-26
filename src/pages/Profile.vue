<template>
  <div>
    <div class="max-w-2xl mx-auto">
      <HeaderBar class="mb-4" :back="false" />

      <div v-if="error">{{ error }}</div>
      <Statuses @changePage="(params) => changePage(params)" v-else :statuses="profileStatuses" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Statuses from "@components/Statuses.vue";
import HeaderBar from "@components/layout/HeaderBar.vue";
import { useTimelineStore } from "@stores/timeline-module";
import { apiErrors } from "@mixins/apiErrors";

export default defineComponent({
  name: "HomePage",
  components: { Statuses, HeaderBar },
  mixins: [apiErrors],
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
      this.timelineStore
        .profileStatusesFetch(params, this.$route.params.screen_name as string)
        .catch(this.onApiError);
    },
    changePage(params: Partial<TimelinePaginationParams>) {
      this.$router.push({
        name: this.$route.name as string,
        query: { max_id: params.max_id as string, since_id: params.since_id as string },
      });
      this.load(params);
    },
  },
  computed: {
    params(): Partial<TimelinePaginationParams> {
      const since_id = this.$route.query.since_id as string;
      const max_id = this.$route.query.max_id as string;
      return {
        ...(since_id && { since_id }),
        ...(max_id && { max_id }),
      };
    },
  },
  created() {
    this.load(this.params);
  },
  watch: {
    "$route.query"() {
      this.load(this.params);
    },
  },
});
</script>
