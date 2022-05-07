<template>
  <div class="layout--fill max-w-2xl mx-auto">
    <HeaderBar class="mb-4" />

    <div class="flex-grow">settings...</div>

    <NavigationPrimary :has-timeline="false" />
  </div>
</template>

<script lang="ts" setup>
import HeaderBar from "@components/Layout/HeaderBar.vue";
import NavigationPrimary from "@components/NavigationPrimary/NavigationPrimary.vue";
</script>
