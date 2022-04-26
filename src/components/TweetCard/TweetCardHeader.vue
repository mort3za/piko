<template>
  <div class="flex justify-start items-center mb-1">
    <div class="flex flex-col">
      <ProfileDidAction :status="status" />
      <div class="flex leading-3">
        <ProfileLink class="mr-2 shrink-0" :user="user" />
        <span class="mr-2 flex items-center mted">·</span>
        <!-- time -->
        <router-link
          class="flex items-center"
          :to="{ name: 'Status', params: { id: status.id_str, screen_name: user.screen_name } }"
          ><time class="muted text-xs">{{ getRelativeTime(status.created_at) }}</time></router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getRelativeTime } from "@services/time";
import ProfileLink from "@components/Profile/ProfileLink.vue";
import { FullUser, Status } from "twitter-d";
import ProfileDidAction from "@components/Profile/ProfileDidAction.vue";
import { computed } from "@vue/reactivity";

const props = defineProps({
  status: { type: Object as () => Status, required: true },
  statusContent: { type: Object as () => Status, required: true },
});

const user = computed(() => props.statusContent.user as FullUser);
</script>
