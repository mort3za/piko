<template>
  <div>
    <div class="toolbar flex justify-between items-center mt-3 px-2 muted select-none">
      <button @click="toggleReply" aria-label="Reply">
        <img class="icon" src="/icons/reply.svg" alt="" />
      </button>

      <span class="flex items-center"
        ><img class="mr-1 icon" src="/icons/retweet.svg" alt="" /><small
          class="text-xs"
          :class="{ invisible: !status.retweet_count }"
          >{{ status.retweet_count }}</small
        ></span
      >
      <span class="flex items-center">
        <img class="mr-1 icon" src="/icons/heart.svg" alt="" /><small
          class="text-xs"
          :class="{ invisible: !status.favorite_count }"
          >{{ status.favorite_count }}</small
        ></span
      >

      <a class="link text-xs muted" :href="twitterLink" rel="noopener noreferrer" target="_blank"
        ><img class="icon" src="/icons/external.svg" alt=""
      /></a>
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

<script lang="ts">
import { defineComponent } from "vue";
import ComposeTweet from "@components/ComposeTweet.vue";
import { FullUser, Status } from "twitter-d";

export default defineComponent({
  name: "TweetCardToolbar",
  components: { ComposeTweet },
  data: () => ({
    showReplyCompose: false,
  }),
  props: {
    statusContent: {
      type: Object as () => Status,
      required: true,
    },
    status: {
      type: Object as () => Status,
      required: true,
    },
  },
  computed: {
    twitterLink() {
      return `https://twitter.com/${(this.statusContent.user as FullUser).screen_name}/status/${
        this.statusContent.id_str
      }`;
    },
  },
  methods: {
    toggleReply() {
      this.showReplyCompose = !this.showReplyCompose;
    },
  },
});
</script>

<style scoped>
.icon {
  width: 20px;
  height: 20px;
}
</style>
