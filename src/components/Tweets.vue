<template>
  <section>
    <router-link
      v-for="status in statuses"
      :key="status.id"
      :to="{ name: 'Status', params: { id: status.id, username: status.user.screen_name } }"
    >
      <Tweet :status="status"></Tweet>
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tweet from "@components/Tweet.vue";
export default defineComponent({
  name: "Timeline",
  props: {
    statuses: {
      type: Array,
      required: true,
    },
  },
  components: { Tweet },
});
</script>
