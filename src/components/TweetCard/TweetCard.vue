<template>
  <div class="flex py-3">
    <AvatarLine class="shrink-0" :status="status" :status-content="statusContent" />
    <div class="flex-grow">
      <TweetCardHeader :status="status" :status-content="statusContent" />

      <TweetCardContent :status="status" :status-content="statusContent">
        <QuotedTweetCard v-if="statusContent.quoted_status" :status="statusContent.quoted_status" />
      </TweetCardContent>
      <TweetCardToolbar :status="status" :status-content="statusContent" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import TweetCardContent from "./TweetCardContent.vue";
import TweetCardToolbar from "./TweetCardToolbar.vue";
import TweetCardHeader from "./TweetCardHeader.vue";
import AvatarLine from "./AvatarLine.vue";
import { Status } from "twitter-d";
const QuotedTweetCard = defineAsyncComponent(() => import("./QuotedTweetCard.vue"));

export default defineComponent({
  name: "Tweet",
  components: { AvatarLine, QuotedTweetCard, TweetCardContent, TweetCardToolbar, TweetCardHeader },
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
