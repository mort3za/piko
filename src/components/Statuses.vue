<template>
  <section class="px-2">
    <div class="block mb-6 last:mb-0" v-for="status in statuses" :key="status.id_str">
      <TweetCard :status="status" />
    </div>

    <div class="flex justify-between items-center p-2">
      <a class="button" @click.prevent="$emit('changePage', { since_id: firstStatus?.id_str })">Prev</a>
      <a class="button" @click.prevent="$emit('changePage', { max_id: lastStatus?.id_str })">Next</a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TweetCard from "@components/TweetCard/TweetCard.vue";
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
