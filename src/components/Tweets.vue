<template>
  <section>hi this is your timeline of Tweets!</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Timeline",
  props: {
    tweets: {
      type: Array,
      required: true,
    },
  },
});
</script>
