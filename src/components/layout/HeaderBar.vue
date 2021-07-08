<template>
  <div class="flex w-full justify-between px-4 py-2 bg-orange-light sticky top-0">
    <router-link :to="{ name: 'Home' }">Back</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderBar",
});
</script>
