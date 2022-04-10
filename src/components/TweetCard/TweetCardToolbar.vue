<template>
  <div>
    <div class="toolbar flex justify-between items-center mt-2 px-4 muted select-none">
      <div class="flex gap-6 items-center text-xs">
        <button @click="toggleReply" aria-label="Reply">
          <img class="icon" src="/icons/reply.svg" alt="" />
        </button>

        <span class="mr-4 flex items-center" v-if="status.retweet_count > 0"
          ><img class="mr-1 icon" src="/icons/retweet.svg" alt="" /> {{ status.retweet_count }}</span
        >
        <span v-if="status.favorite_count > 0" class="mr-4 flex items-center">
          <img class="mr-1 icon" src="/icons/heart.svg" alt="" />
          {{ status.favorite_count }}</span
        >
      </div>
      <div class="flex">
        <a class="link text-xs muted" :href="twitterLink" rel="noopener noreferrer" target="_blank"
          ><img class="icon" src="/icons/external.svg" alt=""
        /></a>
      </div>
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

export default defineComponent({
  name: "TweetCardToolbar",
  components: { ComposeTweet },
  data: () => ({
    showReplyCompose: false,
  }),
  props: {
    status: {
      type: Object,
      required: true,
    },
  },
  computed: {
    twitterLink() {
      return `https://twitter.com/${this.status.user.screen_name}/status/${this.status.id_str}`;
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
  width: 16px;
  height: 16px;
}
</style>
