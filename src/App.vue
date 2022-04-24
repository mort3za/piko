<template>
  <router-view :key="fullPath" />
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";

const route = useRoute();
const fullPath = computed(() => route.fullPath.split("#")[0]);
</script>
