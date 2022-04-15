<template>
  <div class="flex justify-between items-center py-6 mt-4 padding-x">
    <a class="button" @click.prevent="updateRoute({ since_id: sinceId })">Prev</a>
    <a class="button" @click.prevent="updateRoute({ max_id: maxIdFixed })">Next</a>
  </div>
</template>

<script lang="ts" setup>
import { supportsBigInt } from "@services/number";
import { computed } from "vue";
import { LocationQueryRaw, useRoute, useRouter } from "vue-router";

const props = defineProps({
  sinceId: String,
  maxId: String,
});
const route = useRoute();
const router = useRouter();
const maxIdFixed = computed(() => {
  if (!props.maxId) return;
  if (!supportsBigInt) return props.maxId;
  return String(BigInt(props.maxId) - BigInt(1));
});

function updateRoute(queryParams: LocationQueryRaw) {
  router.push({
    name: route.name as string,
    query: queryParams,
  });
}
</script>
