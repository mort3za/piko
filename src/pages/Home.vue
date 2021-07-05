<template>
  <div>
    <Tweets :tweets="latestTweetsGet" />
    <LoginButton />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginButton from "@components/LoginButton.vue";
import Tweets from "@components/Tweets.vue";
import { useStore, mapGetters, mapActions } from "vuex";
import sampleTimelineTweets from "@assets/temp/sample-timeline-tweets.json";

export default defineComponent({
  name: "Home",
  components: { LoginButton, Tweets },
  computed: {
    // ...mapGetters("timeline", ["latestTweetsGet"]),
  },
  methods: {
    ...mapActions("timeline", ["latestTweetsFetch"]),
  },
  created() {
    // fixme: enable
    // this.latestTweetsFetch({});
  },
  setup() {
    // fixme: remove
    const latestTweetsGet = ref(sampleTimelineTweets);

    return { latestTweetsGet };
  },
});
</script>
