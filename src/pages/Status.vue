<template>
  <div class="max-w-2xl mx-auto layout--fill">
    <HeaderBar class="mb-4" />
    <div class="max-w-2xl mx-auto pb-8" v-if="status">
      <TweetCard :status="status" />
    </div>
    <MentionStatuses v-if="status" :status-id="status.id_str" />
  </div>
</template>

<script lang="ts">
import HeaderBar from "@components/Layout/HeaderBar.vue";
import { defineAsyncComponent, defineComponent, ref } from "vue";
import { useStatusStore } from "@stores/status-module";

export default defineComponent({
  name: "StatusPage",
  setup() {
    return {
      statusStore: useStatusStore(),
      status: ref(null),
    };
  },
  components: {
    HeaderBar,
    MentionStatuses: defineAsyncComponent(() => import("@components/MentionStatuses.vue")),
    TweetCard: defineAsyncComponent(() => import("@components/TweetCard/TweetCard.vue")),
  },
  async created() {
    this.status = await this.statusStore.statusFetch(this.$route.params.id as string);
  },
});
</script>
