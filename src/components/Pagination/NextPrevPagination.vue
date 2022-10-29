<template>
  <div class="flex justify-between items-center gap-6">
    <button
      type="button"
      :class="{ disabled: isPrevDisabled }"
      class="px-5 py-3 text-5xl leading-3"
      @click.prevent="goBack"
    >
      <IconChevronLeft />
    </button>

    <button
      type="button"
      class="px-5 py-3 text-5xl leading-3"
      @click.prevent="updateRoute({ max_id: maxIdFixed })"
    >
      <IconChevronRight />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { supportsBigInt } from "@services/number";
import { computed, watch } from "vue";
import { LocationQueryRaw, useRoute, useRouter } from "vue-router";
import IconChevronRight from "@assets/icons/chevron-right.svg?component";
import IconChevronLeft from "@assets/icons/chevron-left.svg?component";

import { useTimelineStore } from "@stores/timeline-module";
const timelineStore = useTimelineStore();

// const sinceId = computed(() => timelineStore.statuses.at(0)?.id);
const maxId = computed(() => timelineStore.statuses.at(-1)?.id);

const route = useRoute();
const router = useRouter();

// fixed maxId = maxId - 1
const maxIdFixed = computed(() => {
  if (!maxId.value) return;
  if (!supportsBigInt) return maxId.value;
  return String(BigInt(maxId.value) - BigInt(1));
});

const isPrevDisabled = computed(() => !route.query.max_id && !route.query.since_id);

const emit = defineEmits(["change"]);
const fullPath = computed(() => route.fullPath.split("#")[0]);
watch(fullPath, onPathChange, { immediate: true, flush: "post" });

function onPathChange() {
  emit("change");
}

function updateRoute(queryParams: LocationQueryRaw) {
  router.push({
    name: route.name as string,
    query: queryParams,
  });
}
function goBack() {
  history.back();
}
</script>
