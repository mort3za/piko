<template>
  <section>
    <div class="flex w-full justify-between px-4 py-2 bg-blue-100 sticky top-0 rounded-b-2xl">
      <!-- left -->
      <a class="button mb-0" @click="toggleCompose">Tweet</a>

      <router-link class="text-blue-500" :to="{ name: 'Home' }">Piko</router-link>

      <!-- right -->
      <a :href="logoutLink" class="button mb-0">Logout</a>
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
      return apiLink("logout");
    },
  },
});
</script>
