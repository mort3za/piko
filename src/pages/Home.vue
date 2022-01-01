<template>
  <div>
    <div class="max-w-2xl mx-auto">
      <ComposeTweet />

      {{ latestStatuses }}

      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <template v-else>
        <Statuses :statuses="latestStatuses" />
      </template>
    </div>
    <LoginButton />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import LoginButton from "@components/LoginButton.vue";
import Statuses from "@components/Statuses.vue";
import ComposeTweet from "@components/ComposeTweet.vue";
import { useTimelineStore } from "@stores/timeline-module";

export default defineComponent({
  name: "HomePage",
  components: { LoginButton, Statuses, ComposeTweet },
  setup() {
    const timelineStore = useTimelineStore();

    const latestStatuses = computed(() => timelineStore.latestStatuses);
    const latestStatusesFetch = timelineStore.latestStatusesFetch;

    return {
      latestStatuses,
      latestStatusesFetch,
      loading: false,
      error: "",
    };
  },
  methods: {
    init() {
      console.log("init");

      this.loading = true;
      this.error = "";
      this.latestStatusesFetch({ count: 10 })
        .catch((error) => {
          console.log("error.....", error);
          this.error = error.message;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  created() {
    this.init();
  },
});
</script>
