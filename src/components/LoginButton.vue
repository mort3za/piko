<template>
  <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" :href="loginLink"
    >Login</a
  >
</template>

<script lang="ts">
import { apiLink } from "@services/api";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginButton",
  computed: {
    loginLink() {
      return apiLink("authenticate");
    },
  },
});
</script>
