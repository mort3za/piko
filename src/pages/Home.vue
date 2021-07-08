<template>
  <div>
    <div class="max-w-2xl mx-auto">
      <ComposeTweet />
      <Tweets :statuses="latestStatusesGet" />
    </div>
    <LoginButton />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginButton from "@components/LoginButton.vue";
import Tweets from "@components/Tweets.vue";
import { mapGetters, mapActions } from "vuex";
import ComposeTweet from "@components/ComposeTweet.vue";

export default defineComponent({
  name: "HomePage",
  components: { LoginButton, Tweets, ComposeTweet },
  computed: {
    ...mapGetters("timeline", ["latestStatusesGet"]),
  },
  methods: {
    ...mapActions("timeline", ["latestStatusesFetch"]),
  },
  created() {
    this.latestStatusesFetch({ count: 10 });
  },
});
</script>
