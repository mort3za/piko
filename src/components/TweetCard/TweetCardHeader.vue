<template>
  <div class="flex justify-between mb-1">
    <div class="flex flex-col">
      <ProfileDidAction :status="status" />
      <!-- avatar + name/username -->
      <div class="flex items-center leading-3">
        <Avatar :user="user" class="mr-2" />
        <ProfileLink class="mr-2" :user="user" />
      </div>
    </div>

    <!-- time -->
    <router-link
      class="flex flex-col justify-end"
      :to="{ name: 'Status', params: { id: status.id_str, screen_name: user.screen_name } }"
      ><time class="muted text-xs">{{ formatDateTime(status.created_at) }}</time></router-link
    >
  </div>
</template>

<script lang="ts">
import { formatDateTime } from "@services/utils";
import { defineComponent } from "vue";
import Avatar from "@components/Avatar.vue";
import ProfileLink from "@components/Profile/ProfileLink.vue";
import { Status } from "twitter-d";
import ProfileDidAction from "@components/Profile/ProfileDidAction.vue";

export default defineComponent({
  name: "TweetCardHeader",
  components: { Avatar, ProfileLink, ProfileDidAction },
  props: {
    status: { type: Object as () => Status, required: true },
    statusContent: { type: Object as () => Status, required: true },
  },
  methods: {
    formatDateTime,
  },
  computed: {
    user() {
      return this.statusContent.user;
    },
  },
});
</script>

<style scoped></style>
