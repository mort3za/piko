<template>
  <IconLoading v-if="loading" class="mx-auto shadow-zinc-400 flex-grow w-6 h-6" />
  <section v-else class="flex flex-col justify-between flex-grow">
    <h2 v-if="title && statuses.length > 0" class="text-lg mb-2 padding-x">{{ title }}</h2>
    <div
      class="first:border-t border-b block dark:border-slate-700/[0.5]"
      v-for="status in statuses"
      :key="status.id_str"
    >
      <TweetCard class="padding-x" :status="status" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import TweetCard from "@components/TweetCard/TweetCard.vue";
import { Status } from "twitter-d";
import IconLoading from "@assets/icons/loading.svg?component";

defineProps({
  title: { type: String, default: "" },
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
