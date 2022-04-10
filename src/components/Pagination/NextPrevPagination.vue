<template>
  <div class="flex justify-between items-center py-6 mt-4 padding-x">
    <a class="button" @click.prevent="updateRoute({ since_id: sinceId })">Prev</a>
    <a class="button" @click.prevent="updateRoute({ max_id: maxId })">Next</a>
  </div>
</template>

<script lang="ts" setup>
import { LocationQueryRaw, useRoute, useRouter } from "vue-router";

defineProps({
  sinceId: String,
  maxId: String,
});
const route = useRoute();
const router = useRouter();

function updateRoute(queryParams: LocationQueryRaw) {
  router.push({
    name: route.name as string,
    query: queryParams,
  });
}
</script>
