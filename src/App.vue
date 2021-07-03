<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tweets from "./components/Tweets.vue";

export default defineComponent({
  name: "App",
  components: {
    Tweets,
  },
});
</script>
