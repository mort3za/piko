<template>
  <router-link
    class="flex items-center"
    :to="{ name: 'Profile', params: { screen_name: user.screen_name } }"
  >
    <span class="mr-2 text-sm">{{ user.name }}</span>
    <span v-if="showScreenName" class="muted text-xs">{{ user.screen_name }}</span>
  </router-link>
</template>

<script lang="ts">
import { User } from "twitter-d";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileLink",
  props: {
    user: {
      type: Object as () => User,
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
