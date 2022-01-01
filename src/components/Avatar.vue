<template>
  <img class="rounded-full w-8 h-8" :src="user.profile_image_url_https" alt="" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Avatar",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped></style>
