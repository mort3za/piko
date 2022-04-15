<template>
  <div class="text-red text-center bg-red-50 p-3 rounded-md font-bold">
    {{ error.statusCode }} {{ error.message }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    required: true,
  },
});
</script>
