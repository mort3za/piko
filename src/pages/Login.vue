<template>
  <div>
    Register in <a rel="noopener noreferrer nofollow" href="https://twitter.com">twitter.com</a> or
    <LoginButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginButton from "@components/LoginButton.vue";

export default defineComponent({
  name: "Login",
  components: { LoginButton },
});
</script>
