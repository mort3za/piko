<template>
  <div class="flex muted leading-5 gap-1">
    <span v-if="status.in_reply_to_user" class="text-xs"
      >In reply to
      <router-link
        class="link"
        :to="{
          name: 'Status',
          params: { username: status.in_reply_to_user.username, id: status.in_reply_to_user.id },
        }"
        >{{ status.in_reply_to_user.username }}</router-link
      ></span
    >
    <span v-if="isRetweeted" class="inline-flex gap-1">
      <ProfileLink :user="user" :show-screen-name="false" :large="false" :minimal="true" /><span
        class="text-xs"
        >retweeted</span
      >
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import ProfileLink from "./ProfileLink.vue";
import { Tweet } from "@services/tweet";

const props = defineProps({
  status: {
    type: Object as () => Tweet,
    required: true,
  },
});

const isRetweeted = computed(() => props.status.retweeted);
const user = computed(() => props.status.user);
</script>
