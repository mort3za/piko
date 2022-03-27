<template>
  <div>
    <TweetCardHeader :status="status" :status-content="statusContent" />
    <TweetCardContent :status="status" :status-content="statusContent" />
    <TweetCardToolbar :status="status" :status-content="statusContent" />
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
  computed: {
    statusContent() {
      return this.status.retweeted_status ?? this.status;
    },
  },
});
</script>
