<template>
  <router-link
    class="flex items-center muted"
    :to="{ name: 'Profile', params: { screen_name: user.screen_name } }"
  >
    <span class="mr-1 truncate max-w-[120px] sm:max-w-none">{{ user.name }}</span>
    <span v-if="showScreenName" class="text-xs truncate max-w-[100px] sm:max-w-none font-normal"
      >@{{ user.screen_name }}</span
    >
  </router-link>
</template>

<script lang="ts" setup>
import { FullUser } from "twitter-d";

defineProps({
  truncate: {
    type: Boolean,
    default: true,
  },
  user: {
    type: Object as () => FullUser,
    required: true,
  },
  showScreenName: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped></style>
