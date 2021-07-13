<template>
  <a :href="loginLink">Login</a>
</template>

<script lang="ts">
import { makeApiUrl } from "@functions/utils";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginButton",
  computed: {
    loginLink() {
      return makeApiUrl("/authenticate");
    },
  },
});
</script>
