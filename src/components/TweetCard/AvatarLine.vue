<template>
  <div class="flex mr-3 pt-1">
    <Avatar :user="user" />
  </div>
</template>

<script lang="ts" setup>
import Avatar from "@components/Avatar.vue";
import { computed } from "@vue/reactivity";
import { FullUser, Status } from "twitter-d";

const props = defineProps({
  status: { type: Object as () => Status, required: true },
  statusContent: { type: Object as () => Status, required: true },
});

const user = computed(() => props.statusContent.user as FullUser);
</script>
