<template>
  <!-- todo: user.protected -->
  <!-- :to="{ name: 'Profile', params: { username: user.username } }" -->
  <a
    v-if="user"
    class="flex items-center muted text-xs gap-1"
    :class="[large ? 'sm:text-sm' : '']"
    :href="`https://twitter.com/${user.username}`"
    target="_blank"
  >
    <span class="profile-name sm:max-w-none">{{ user.name }}</span>
    <IconCheckCircle class="block w-4 h-4 rounded-full text-blue-400/[0.5]" v-if="showVerified" />
    <span v-if="showScreenName" class="profile-username text-xs font-normal sm:max-w-none"
      >@{{ user.username }}</span
    >
  </a>
</template>

<script lang="ts" setup>
import { components } from "@twitter";
import { computed } from "vue";
import IconCheckCircle from "@assets/icons/check-circle.svg?component";

const props = defineProps({
  user: {
    type: Object as () => components["schemas"]["User"],
  },
  showScreenName: {
    type: Boolean,
    default: true,
  },
  large: {
    type: Boolean,
    default: true,
  },
  minimal: {
    type: Boolean,
    default: false,
  },
});

const showVerified = computed(() => props.user?.verified && !props.minimal);
</script>
