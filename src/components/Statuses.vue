<template>
  <section class="px-2 flex flex-col justify-between flex-grow">
    <div>
      <div class="block mb-6 last:mb-0" v-for="status in statuses" :key="status.id_str">
        <TweetCard :status="status" />
      </div>
    </div>

    <NextPrevPagination :since-id="firstStatus?.id_str" :max-id="lastStatus?.id_str" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TweetCard from "@components/TweetCard/TweetCard.vue";
import { Status } from "twitter-d";
import NextPrevPagination from "./Pagination/NextPrevPagination.vue";

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
  components: { TweetCard, NextPrevPagination },
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
