<template>
  <div class="flex muted text-xs">
    <ProfileLink :user="user" :show-screen-name="false" /><span class="text-sm">retweeted</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { User } from "twitter-d";
import ProfileLink from "./ProfileLink.vue";

export default defineComponent({
  name: "ProfileDidAction",
  props: {
    user: {
      type: Object as () => User,
      required: true,
    },
  },
  components: { ProfileLink },
});
</script>

<style scoped></style>
