<template>
  <div>
    <div
      class="grid grid-cols-[1fr,auto] gap-1 sm:flex justify-between sm:justify-start items-center mb-1 w-full"
    >
      <div class="flex truncate">
        <Avatar :user="statusContent.user" class="w-8 mr-1 my-auto" />
        <!-- name + username -->
        <ProfileLink class="mr-1 sm:mr-2 shrink-0" :user="user" />
        <!-- separator -->
        <span class="hidden sm:flex items-center mr-1 sm:mr-2">·</span>
      </div>
      <!-- time -->
      <router-link
        class="flex items-center justfiy-end"
        :to="{ name: 'Status', params: { id: status.id, screen_name: user.username } }"
        ><time class="muted text-xs shrink-0">{{
          getRelativeTime(statusContent.created_at)
        }}</time></router-link
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getRelativeTime } from "@services/time";
import ProfileLink from "@components/Profile/ProfileLink.vue";
import Avatar from "@components/Avatar.vue";
import { components } from "@twitter";
import { computed } from "@vue/reactivity";

const props = defineProps({
  status: { type: Object as () => components["schemas"]["Tweet"], required: true },
  statusContent: { type: Object as () => components["schemas"]["Tweet"], required: true },
  quoted: { type: Boolean, default: false },
});

const user = computed(() => props.statusContent.user as components["schemas"]["User"]);
</script>
