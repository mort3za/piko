<template>
  <div>
    <textarea v-model="text" id="" cols="30" rows="10"></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return { text: "" };
  },
});
</script>
