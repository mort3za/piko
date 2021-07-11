<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Statuses from "@components/Statuses.vue";

export default defineComponent({
  name: "App",
  components: {
    Statuses,
  },
});
</script>
