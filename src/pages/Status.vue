<template>
  <div class="layout--fill max-w-2xl mx-auto">
    <HeaderBar class="mb-4" />
    <div class="w-full mx-auto pb-8" v-if="state.status">
      <TweetCard :status="state.status" />
    </div>
    <MentionStatuses class="flex flex-grow" v-if="state.status" :status-id="state.status.id_str" />
  </div>
</template>

<script lang="ts" async setup>
import HeaderBar from "@components/Layout/HeaderBar.vue";
import { defineAsyncComponent, onMounted, shallowReactive } from "vue";
import { useStatusStore } from "@stores/status-module";
import { useRoute } from "vue-router";
import { Status } from "twitter-d";
const TweetCard = defineAsyncComponent(() => import("@components/TweetCard/TweetCard.vue"));
const MentionStatuses = defineAsyncComponent(() => import("@components/MentionStatuses.vue"));

const statusStore = useStatusStore();
const route = useRoute();

const state = shallowReactive({ status: null as unknown as Status });
onMounted(async () => {
  state.status = (await statusStore.statusFetch(route.params.id as string)) as Status;
});
</script>
