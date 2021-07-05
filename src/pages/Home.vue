<template>
  <div>
    <Tweets :tweets="latestTweetsGet" />
    <LoginButton />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import LoginButton from "@components/LoginButton.vue";
import Tweets from "@components/Tweets.vue";
import { useStore, mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "Home",
  components: { LoginButton, Tweets },
  computed: {
    ...mapGetters("timeline", ["latestTweetsGet"]),
  },
  methods: {
    ...mapActions("timeline", ["latestTweetsFetch"]),
  },
  created() {
    this.latestTweetsFetch({});
  },
});
</script>
