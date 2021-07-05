<template>
  <div class="border border-blue p-4 block">{{ tweet.text }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tweet",
  props: {
    tweet: { type: Object, required: true },
  },
});
</script>

<style scoped></style>
