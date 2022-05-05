<template>
  <router-link
    class="flex items-center"
    :to="{ name: 'Profile', params: { screen_name: user.screen_name } }"
  >
    <span class="mr-1 text-sm truncate max-w-[100px] sm:max-w-none">{{ user.name }}</span>
    <span v-if="showScreenName" class="muted text-xs truncate max-w-[80px] sm:max-w-none"
      >@{{ user.screen_name }}</span
    >
  </router-link>
</template>

<script lang="ts">
import { FullUser } from "twitter-d";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileLink",
  props: {
    user: {
      type: Object as () => FullUser,
      required: true,
    },
    showScreenName: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped></style>
