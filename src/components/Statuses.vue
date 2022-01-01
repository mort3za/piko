<template>
  <section>
    <router-link
      class="block mb-3 last:mb-0"
      v-for="status in statuses"
      :key="status.id_str"
      :to="{ name: 'Status', params: { id: status.id_str, username: status.user.screen_name } }"
    >
      <TweetCard :status="status" />
    </router-link>

    <div class="flex justify-between items-center p-2">
      <a class="cursor-pointer" @click.prevent="$emit('changePage', { since_id: firstStatus?.id_str })"
        >Prev</a
      >
      <a class="cursor-pointer" @click.prevent="$emit('changePage', { max_id: lastStatus?.id_str })"
        >Next</a
      >
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TweetCard from "@components/TweetCard/index.vue";
import { Status } from "twitter-d";

export default defineComponent({
  name: "Tweets",
  setup() {
    return {
      TweetCard,
    };
  },
  emits: ["changePage"],
  props: {
    statuses: {
      type: Array as () => Status[],
      required: true,
    },
  },
  components: { TweetCard },
  computed: {
    firstStatus() {
      return this.statuses.at(0);
    },
    lastStatus() {
      return this.statuses.at(-1);
    },
  },
});
</script>
