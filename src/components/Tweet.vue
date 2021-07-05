<template>
  <div>{{ tweet.text }}</div>
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
