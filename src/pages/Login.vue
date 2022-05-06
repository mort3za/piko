<template>
  <div class="max-w-2xl mx-auto layout--fill">
    <HeaderBar class="mb-4" :is-user="false" />
    <div class="max-w-2xl mx-auto">
      <h1 class="text-lg mb-3 mt-16">Coolest Twitter client <sub>❄️</sub>❄️<sup>❄️</sup></h1>
      <ul class="list-disc pl-4">
        <li>Lightweight</li>
        <li>Customizable</li>
        <li>With forbidden features</li>
      </ul>
      <div class="flex flex-col mt-16 gap-4 w-64">
        <Button class="button" :href="loginLink">Login</Button>
        <p class="text-xs muted">Login to your account in www.twitter.com</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderBar from "@components/Layout/HeaderBar.vue";
import Button from "@components/Base/Button.vue";
import { computed } from "vue";
import { apiLink } from "@services/api";

const loginLink = computed(() => apiLink("/authenticate"));
</script>
