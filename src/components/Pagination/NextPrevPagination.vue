<template>
  <div class="flex justify-between items-center gap-6">
    <a class="px-6 py-3 text-5xl leading-3" @click.prevent="updateRoute({ since_id: sinceId })">
      <img src="/icons/chevron-left.svg" alt="" />
    </a>

    <a class="px-6 py-3 text-5xl leading-3" @click.prevent="updateRoute({ max_id: maxIdFixed })"
      ><img src="/icons/chevron-right.svg" alt=""
    /></a>
  </div>
</template>

<script lang="ts" setup>
import { supportsBigInt } from "@services/number";
import { computed } from "vue";
import { LocationQueryRaw, useRoute, useRouter } from "vue-router";

import { useTimelineStore } from "@stores/timeline-module";
const timelineStore = useTimelineStore();

const sinceId = computed(() => timelineStore.statuses.at(0)?.id_str);
const maxId = computed(() => timelineStore.statuses.at(-1)?.id_str);

const route = useRoute();
const router = useRouter();

// maxId - 1
const maxIdFixed = computed(() => {
  if (!maxId.value) return;
  if (!supportsBigInt) return maxId.value;
  return String(BigInt(maxId.value) - BigInt(1));
});

function updateRoute(queryParams: LocationQueryRaw) {
  router.push({
    name: route.name as string,
    query: queryParams,
  });
}
</script>
