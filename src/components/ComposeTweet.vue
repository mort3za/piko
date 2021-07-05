<template>
  <div>
    <textarea class="border w-full" v-model="text" id="" cols="30" rows="10"></textarea>
    <button>send</button>
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
