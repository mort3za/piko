<template>
  <div class="max-w-2xl mx-auto">
    <HeaderBar class="mb-4" :is-user="false" />
    <div class="max-w-2xl mx-auto pb-8">
      <div class="mt-16">
        Register in <a rel="noopener noreferrer nofollow" href="https://twitter.com">twitter.com</a> or
        <LoginButton />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginButton from "@components/LoginButton.vue";
import HeaderBar from "@components/Layout/HeaderBar.vue";

export default defineComponent({
  name: "Login",
  components: { HeaderBar, LoginButton },
});
</script>
