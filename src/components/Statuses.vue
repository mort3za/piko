<template>
  <img src="/icons/loading.svg" v-if="loading" class="mx-auto shadow-zinc-400 flex-grow w-10 h-10" />
  <section v-else class="flex flex-col justify-between flex-grow">
    <div class="padding-x">
      <div class="first:border-t border-b block" v-for="status in statuses" :key="status.id_str">
        <TweetCard :status="status" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import TweetCard from "@components/TweetCard/TweetCard.vue";
import { Status } from "twitter-d";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  statuses: {
    type: Array as () => Status[],
    required: true,
  },
});
</script>
