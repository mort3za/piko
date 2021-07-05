<template>
  <div>
    <div class="max-w-2xl mx-auto">
      <ComposeTweet />
      <Tweets :tweets="latestTweetsGet" />
    </div>
    <LoginButton />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginButton from "@components/LoginButton.vue";
import Tweets from "@components/Tweets.vue";
import { useStore, mapGetters, mapActions } from "vuex";
import ComposeTweet from "@components/ComposeTweet.vue";

export default defineComponent({
  name: "Home",
  components: { LoginButton, Tweets, ComposeTweet },
  computed: {
    ...mapGetters("timeline", ["latestTweetsGet"]),
  },
  methods: {
    ...mapActions("timeline", ["latestTweetsFetch"]),
  },
  created() {
    this.latestTweetsFetch({ count: 2 });
  },
});
</script>
