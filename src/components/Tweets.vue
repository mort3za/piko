<template>
  <section>hi this is your timeline of Tweets!</section>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "Timeline",
  props: {
    tweets: {
      type: Array,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>
