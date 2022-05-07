<template>
  <div class="root grid py-3">
    <ProfileDidAction :status="status" class="col-start-2" />
    <AvatarLine class="shrink-0" :status="status" :status-content="statusContent" />
    <div>
      <TweetCardHeader :status="status" :status-content="statusContent" />

      <TweetCardContent :status="status" :status-content="statusContent">
        <QuotedTweetCard v-if="statusContent.quoted_status" :status="statusContent.quoted_status" />
      </TweetCardContent>
      <TweetCardToolbar :status="statusContent" :status-content="statusContent" />
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
import ProfileDidAction from "@components/Profile/ProfileDidAction.vue";
const QuotedTweetCard = defineAsyncComponent(() => import("./QuotedTweetCard.vue"));

export default defineComponent({
  name: "Tweet",
  components: {
    AvatarLine,
    QuotedTweetCard,
    TweetCardContent,
    TweetCardToolbar,
    TweetCardHeader,
    ProfileDidAction,
  },
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

<style scoped>
.root {
  grid-template-columns: 44px calc(100% - 44px);
  grid-template-rows: auto 1fr;
}
</style>
