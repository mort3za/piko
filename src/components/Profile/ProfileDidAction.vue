<template>
  <div class="flex muted text-xs" v-if="isRetweeted">
    <ProfileLink :user="user" :show-screen-name="false" /><span class="text-sm">retweeted</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Status, User } from "twitter-d";
import ProfileLink from "./ProfileLink.vue";

export default defineComponent({
  name: "ProfileDidAction",
  props: {
    status: {
      type: Object as () => Status,
      required: true,
    },
  },
  components: { ProfileLink },
  computed: {
    isRetweeted() {
      return this.status.retweeted_status;
    },
    user() {
      return this.status.user;
    },
  },
});
</script>

<style scoped></style>
