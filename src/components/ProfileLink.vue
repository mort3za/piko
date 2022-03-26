<template>
  <router-link :to="{ name: 'Profile', params: { screen_name: user.screen_name } }">{{
    user.name
  }}</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileLink",
  props: ["user"],
});
</script>

<style scoped></style>
