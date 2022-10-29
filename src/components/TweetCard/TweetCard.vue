<template>
  <div class="py-3">
    <ProfileDidAction :status="status" class="col-start-2 mb-1" />
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
import { components } from "@twitter";
import ProfileDidAction from "@components/Profile/ProfileDidAction.vue";
const QuotedTweetCard = defineAsyncComponent(() => import("./QuotedTweetCard.vue"));

export default defineComponent({
  name: "Tweet",
  components: {
    QuotedTweetCard,
    TweetCardContent,
    TweetCardToolbar,
    TweetCardHeader,
    ProfileDidAction,
  },
  props: {
    status: { type: Object as () => components["schemas"]["Tweet"], required: true },
  },
  computed: {
    statusContent() {
      return this.status.retweeted_status ?? this.status;
    },
  },
});
</script>
