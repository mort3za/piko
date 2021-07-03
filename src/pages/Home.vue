<template>
  <div>
    <Tweets :tweets="[]" />
    <LoginButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginButton from "../components/LoginButton.vue";
import Tweets from "../components/Tweets.vue";

export default defineComponent({
  name: "Home",
  components: { LoginButton, Tweets },
});
</script>
