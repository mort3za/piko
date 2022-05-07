<template>
  <div class="flex muted text-xs leading-5" v-if="isRetweeted">
    <ProfileLink :user="user" :show-screen-name="false" :truncate="false" /><span>retweeted</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Status, FullUser } from "twitter-d";
import ProfileLink from "./ProfileLink.vue";

const props = defineProps({
  status: {
    type: Object as () => Status,
    required: true,
  },
});

const isRetweeted = computed(() => props.status.retweeted_status);
const user = computed(() => props.status.user as FullUser);
</script>
