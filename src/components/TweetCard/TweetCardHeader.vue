<template>
  <div class="flex items-center mb-1">
    <Avatar :user="user" class="mr-2" /><ProfileLink class="mr-2" :user="user" />
    <router-link :to="{ name: 'Status', params: { id: status.id_str, screen_name: user.screen_name } }"
      ><time class="text-xs">{{ formatDateTime(status.created_at) }}</time></router-link
    >
  </div>
</template>

<script lang="ts">
import { formatDateTime } from "@services/utils";
import { defineComponent } from "vue";
import Avatar from "@components/Avatar.vue";
import ProfileLink from "@components/ProfileLink.vue";

export default defineComponent({
  name: "TweetCardHeader",
  components: { Avatar, ProfileLink },
  props: ["status"],
  methods: {
    formatDateTime,
  },
  computed: {
    user() {
      return (this.status as any).user;
    },
  },
});
</script>

<style scoped></style>
