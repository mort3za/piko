<template>
  <div>
    <div class="toolbar flex gap-4 justify-between mt-2 px-4">
      <div>
        <button @click="toggleReply">Reply</button>
      </div>
      <div class="text-xs">
        <span v-if="status.favorite_count > 0" class="mr-4">FAV: {{ status.favorite_count }}</span>
        <span v-if="status.retweet_count > 0">RT: {{ status.retweet_count }}</span>
      </div>
      <div class="flex">
        <a class="link text-xs muted" :href="twitterLink" rel="noopener noreferrer" target="_blank"
          >Open in Twitter</a
        >
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

<style scoped></style>
