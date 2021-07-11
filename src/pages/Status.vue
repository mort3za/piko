<template>
  <div>
    <header-bar class="mb-4" />
    <div class="max-w-2xl mx-auto">
      Status page
      <hr />
      <template v-if="status">
        <TweetCard :status="status" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderBar from "@components/layout/HeaderBar.vue";
import { defineAsyncComponent, defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "StatusPage",
  components: { TweetCard: defineAsyncComponent(() => import("@components/TweetCard.vue")), HeaderBar },
  data: () => ({ status: null }),
  methods: {
    ...mapActions("status", ["statusFetch"]),
  },
  async created() {
    this.status = await this.statusFetch({ id: this.$route.params.id });
  },
});
</script>
