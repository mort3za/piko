<template>
  <div>
    <div class="toolbar flex justify-between items-center mt-3 px-2 muted select-none">
      <button @click="toggleReply" aria-label="Reply">
        <IconReply class="w-5 h-5" />
      </button>

      <span class="flex items-center">
        <IconRetweet class="w-5 h-5 mr-1" />
        <small class="text-xs" :class="{ invisible: !status.retweet_count }">{{
          formatCompact(status.retweet_count)
        }}</small>
      </span>
      <span class="flex items-center">
        <IconHeart class="w-5 h-5 mr-1" />
        <small class="text-xs" :class="{ invisible: !status.favorite_count }">{{
          formatCompact(status.favorite_count)
        }}</small></span
      >

      <a class="link text-xs muted" :href="twitterLink" rel="noopener noreferrer" target="_blank">
        <IconExternal class="w-5 h-5" />
      </a>
    </div>
    <ComposeTweet
      v-if="showReplyCompose"
      class="mt-3"
      :in_reply_to_status_id="status.id_str"
      @success="showReplyCompose = false"
      submit-text="Reply"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent, ref } from "vue";
import { FullUser, Status } from "twitter-d";
import { components } from "@twitter";
import { formatCompact } from "@services/number";
import IconExternal from "@assets/icons/external.svg?component";
import IconReply from "@assets/icons/reply.svg?component";
import IconHeart from "@assets/icons/heart.svg?component";
import IconRetweet from "@assets/icons/retweet.svg?component";
const ComposeTweet = defineAsyncComponent(() => import("@components/ComposeTweet.vue"));

const showReplyCompose = ref(false);
const props = defineProps({
  statusContent: {
    type: Object as () => Status,
    required: true,
  },
  status: {
    type: Object as () => Status,
    required: true,
  },
});

const twitterLink = computed(
  () =>
    `https://twitter.com/${(props.statusContent.user as FullUser).screen_name}/status/${
      props.statusContent.id_str
    }`,
);

function toggleReply() {
  showReplyCompose.value = !showReplyCompose.value;
}
</script>
