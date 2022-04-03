<template>
  <div class="ltr">
    <TweetCardHeader :status="status" :status-content="statusContent" />
    <TweetCardContent :status="status" :status-content="statusContent" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Status } from "twitter-d";
import TweetCardHeader from "./TweetCardHeader.vue";
import TweetCardContent from "./TweetCardContent.vue";

export default defineComponent({
  components: { TweetCardHeader, TweetCardContent },
  props: {
    status: { type: Object as () => Status, required: true },
  },
  computed: {
    statusContent() {
      return this.status.retweeted_status ?? this.status;
    },
  },
});
</script>

<style scoped></style>
