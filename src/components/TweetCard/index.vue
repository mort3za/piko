<template>
  <div>
    <div class="flex items-center mb-1">
      <Avatar :user="status.user" class="mr-2" /><span class="mr-2">{{ status.user.screen_name }}</span>
      <router-link
        :to="{ name: 'Status', params: { id: status.id_str, username: status.user.screen_name } }"
        ><time class="text-xs">{{ formatDateTime(status.created_at) }}</time></router-link
      >
    </div>
    <TweetContent :status="status" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TweetContent from "./Content.vue";
import { Status } from "twitter-d";
import Avatar from "@components/Avatar.vue";
import { formatDateTime } from "@services/utils";

export default defineComponent({
  name: "Tweet",
  components: { TweetContent, Avatar },
  props: {
    status: { type: Object as () => Status, required: true },
  },
  methods: {
    formatDateTime,
  },
});
</script>
