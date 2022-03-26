<template>
  <div>
    <TweetCardHeader :status="status" />
    <TweetCardContent :status="status" />
    <TweetCardToolbar :status="status" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TweetCardContent from "./TweetCardContent.vue";
import TweetCardToolbar from "./TweetCardToolbar.vue";
import { Status } from "twitter-d";
import TweetCardHeader from "./TweetCardHeader.vue";

export default defineComponent({
  name: "Tweet",
  components: { TweetCardContent, TweetCardToolbar, TweetCardHeader },
  props: {
    status: { type: Object as () => Status, required: true },
  },
});
</script>
