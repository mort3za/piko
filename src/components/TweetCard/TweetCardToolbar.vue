<template>
  <div>
    <div class="toolbar flex justify-between items-center mt-3 px-2 muted select-none">
      <button @click="toggleReply" aria-label="Reply">
        <IconReply class="w-5 h-5" />
      </button>

      <span class="flex items-center">
        <IconRetweet class="w-5 h-5 mr-1" />
        <small class="text-xs" :class="{ invisible: !status.public_metrics?.retweet_count }">{{
          status.public_metrics?.retweet_count && formatCompact(status.public_metrics?.retweet_count)
        }}</small>
      </span>
      <span class="flex items-center">
        <IconHeart class="w-5 h-5 mr-1" />
        <small class="text-xs" :class="{ invisible: !status.public_metrics?.like_count }">{{
          status.public_metrics?.like_count && formatCompact(status.public_metrics?.like_count)
        }}</small></span
      >

      <a class="link text-xs muted" :href="twitterLink" rel="noopener noreferrer" target="_blank">
        <IconExternal class="w-5 h-5" />
      </a>
    </div>
    <ComposeTweet
      v-if="showReplyCompose"
      class="mt-3"
      :in_reply_to_status_id="status.id"
      @success="showReplyCompose = false"
      submit-text="Reply"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent, ref } from "vue";
import { formatCompact } from "@services/number";
import IconExternal from "@assets/icons/external.svg?component";
import IconReply from "@assets/icons/reply.svg?component";
import IconHeart from "@assets/icons/heart.svg?component";
import IconRetweet from "@assets/icons/retweet.svg?component";
import { Tweet } from "@services/tweet";
const ComposeTweet = defineAsyncComponent(() => import("@components/ComposeTweet.vue"));

const showReplyCompose = ref(false);
const props = defineProps({
  statusContent: {
    type: Object as () => Tweet,
    required: true,
  },
  status: {
    type: Object as () => Tweet,
    required: true,
  },
});

const twitterLink = computed(() =>
  props.status.user
    ? `https://twitter.com/${props.status.user.username}/status/${props.statusContent.id}`
    : undefined,
);

function toggleReply() {
  showReplyCompose.value = !showReplyCompose.value;
}
</script>
