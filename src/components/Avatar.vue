<template>
  <img
    class="rounded-full aspect-square w-full self-start"
    :src="user.profile_image_url_https"
    alt=""
  />
</template>

<script lang="ts" setup>
defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
