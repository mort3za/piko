<template>
  <div>
    <div class="toolbar flex justify-between items-center mt-5 px-4 muted select-none">
      <button @click="toggleReply" aria-label="Reply">
        <img class="icon" src="/icons/reply.svg" alt="" />
      </button>

      <span class="flex items-center" v-if="status.retweet_count > 0"
        ><img class="mr-1 icon" src="/icons/retweet.svg" alt="" /> {{ status.retweet_count }}</span
      >
      <span v-if="status.favorite_count > 0" class="flex items-center">
        <img class="mr-1 icon" src="/icons/heart.svg" alt="" />
        {{ status.favorite_count }}</span
      >

      <a class="link text-xs muted" :href="twitterLink" rel="noopener noreferrer" target="_blank"
        ><img class="icon" src="/icons/external.svg" alt=""
      /></a>
    </div>
    <ComposeTweet
      v-if="showReplyCompose"
      :in_reply_to_status_id="status.id_str"
      @success="showReplyCompose = false"
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
