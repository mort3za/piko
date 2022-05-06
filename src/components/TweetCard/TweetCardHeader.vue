<template>
  <div>
    <ProfileDidAction :status="status" />
    <div class="flex justify-between sm:justify-start items-center mb-1 w-full">
      <div class="flex">
        <!-- name + username -->
        <ProfileLink class="mr-1 sm:mr-2 shrink-0" :user="user" />
        <!-- separator -->
        <span class="hidden sm:flex items-center mr-1 sm:mr-2">·</span>
      </div>
      <!-- time -->
      <router-link
        class="flex items-center"
        :to="{ name: 'Status', params: { id: status.id_str, screen_name: user.screen_name } }"
        ><time class="muted text-xs shrink-0">{{
          getRelativeTime(status.created_at)
        }}</time></router-link
      >
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
