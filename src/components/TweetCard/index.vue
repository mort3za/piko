<template>
  <div>
    <TweetContent :status="status" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TweetContent from "./Content.vue";
import { Status } from "twitter-d";

export default defineComponent({
  name: "Tweet",
  components: { TweetContent },
  props: {
    status: { type: Object as () => Status, required: true },
  },
});
</script>
