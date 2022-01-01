<template>
  <div>
    <HeaderBar class="mb-4" />
    <div class="max-w-2xl mx-auto" v-if="status">
      <Avatar :user="status.user" /> {{ status.user.screen_name }}
      <hr />
      <TweetCard :status="status" />
    </div>
  </div>
</template>

<script lang="ts">
import HeaderBar from "@components/layout/HeaderBar.vue";
import Avatar from "@components/Avatar.vue";
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
    Avatar,
    HeaderBar,
    TweetCard: defineAsyncComponent(() => import("@components/TweetCard/index.vue")),
  },
  data: () => ({ status: null }),
  async created() {
    this.status = await this.statusStore.statusFetch(this.$route.params.id);
  },
});
</script>
