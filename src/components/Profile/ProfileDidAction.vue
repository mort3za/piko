<template>
  <div class="flex muted leading-5 gap-1">
    <span v-if="status.in_reply_to_screen_name" class="text-xs"
      >In reply to
      <router-link
        class="link"
        :to="{
          name: 'Status',
          params: { username: status.in_reply_to_screen_name, id: status.in_reply_to_status_id_str },
        }"
        >{{ status.in_reply_to_screen_name }}</router-link
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
import { components } from "@twitter";
import ProfileLink from "./ProfileLink.vue";

const props = defineProps({
  status: {
    type: Object as () => components["schemas"]["Tweet"],
    required: true,
  },
});

const isRetweeted = computed(() => props.status.retweeted_status);
const user = computed(() => props.status.user as components["schemas"]["User"]);
</script>
