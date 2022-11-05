<template>
  <img
    v-if="user"
    class="rounded-full aspect-square w-full self-start"
    :src="user.profile_image_url"
    alt=""
  />
</template>

<script lang="ts" setup>
import { components } from "@twitter";

defineProps({
  user: {
    type: Object as () => components["schemas"]["User"],
  },
});
</script>

<style scoped></style>
