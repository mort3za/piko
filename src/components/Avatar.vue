<template>
  <div>
    <img class="rounded-full" :src="user.profile_image_url_https" alt="" />
  </div>
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
