<template>
  <div>
    <HeaderBar class="mb-4" />
    <div class="max-w-2xl mx-auto" v-if="status">
      <TweetCard :status="status" />
    </div>
  </div>
</template>

<script lang="ts">
import HeaderBar from "@components/layout/HeaderBar.vue";
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
    TweetCard: defineAsyncComponent(() => import("@components/TweetCard/index.vue")),
  },
  async created() {
    this.status = await this.statusStore.statusFetch(this.$route.params.id as string);
  },
});
</script>
