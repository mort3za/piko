<template>
  <div>
    <div class="flex items-center mb-1">
      <Avatar :user="status.user" class="mr-2" /><span>{{ status.user.screen_name }}</span>
    </div>
    <TweetContent :status="status" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TweetContent from "./Content.vue";
import { Status } from "twitter-d";
import Avatar from "@components/Avatar.vue";

export default defineComponent({
  name: "Tweet",
  components: { TweetContent, Avatar },
  props: {
    status: { type: Object as () => Status, required: true },
  },
});
</script>
