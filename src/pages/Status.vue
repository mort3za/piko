<template>
  <div>
    <HeaderBar class="mb-4" />
    <div class="max-w-2xl mx-auto">
      Status page
      <hr />
      <TweetCard v-if="status" :status="status" />
    </div>
  </div>
</template>

<script lang="ts">
import HeaderBar from "@components/layout/HeaderBar.vue";
import { defineAsyncComponent, defineComponent } from "vue";
import { useStatusStore } from "@stores/status-module";

export default defineComponent({
  name: "StatusPage",
  setup() {
    return {
      statusStore: useStatusStore(),
    };
  },
  components: {
    TweetCard: defineAsyncComponent(() => import("@components/TweetCard/index.vue")),
    HeaderBar,
  },
  data: () => ({ status: null }),
  async created() {
    this.status = await this.statusStore.statusFetch({ id: this.$route.params.id, params: null });
  },
});
</script>
