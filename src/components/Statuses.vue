<template>
  <section>
    <!-- @ts-ignore -->
    <router-link
      v-for="status in statuses"
      :key="status.id_str"
      :to="{ name: 'Status', params: { id: status.id_str, username: status.user.screen_name } }"
    >
      <TweetCard :status="status" />
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TweetCard from "@components/TweetCard.vue";
import { Status } from "twitter-d";
export default defineComponent({
  name: "Tweets",
  props: {
    statuses: {
      type: Array as () => Status[],
      required: true,
    },
  },
  components: { TweetCard },
});
</script>
