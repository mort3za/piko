<template>
  <section>
    <div class="flex w-full justify-between px-4 py-2 bg-orange-light sticky top-0">
      <router-link v-if="back" :to="{ name: 'Home' }">Back</router-link>
      <a v-else class="mb-2" @click="toggleCompose">Tweet</a>

      <a :href="logoutLink">Logout</a>
    </div>
    <ComposeTweet v-if="showCompose" />
  </section>
</template>

<script lang="ts">
import { apiLink } from "@services/api";
import { useLayoutStore } from "@stores/layout-module";
import { defineComponent } from "vue";
import ComposeTweet from "@components/ComposeTweet.vue";

export default defineComponent({
  name: "HeaderBar",
  components: { ComposeTweet },
  props: {
    back: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const layoutStore = useLayoutStore();

    return {
      layoutStore,
      toggleCompose: layoutStore.toggleCompose,
    };
  },

  computed: {
    showCompose() {
      return this.layoutStore.showCompose;
    },
    logoutLink() {
      return apiLink("exit");
    },
  },
});
</script>
