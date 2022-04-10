<template>
  <section class="mb-8">
    <div class="flex w-full justify-between padding-x py-2 border-b border-blue-200 sticky top-0 z-10">
      <!-- left -->
      <a v-if="isUser" class="button mb-0" @click="toggleCompose">Tweet</a>

      <router-link
        class="text-blue-400 mx-auto flex items-center uppercase text-xs px-4"
        :to="{ name: 'Home' }"
        ><span>Piko Client</span></router-link
      >

      <!-- right -->
      <a v-if="isUser" :href="logoutLink" class="button mb-0">Logout</a>
    </div>
    <ComposeTweet v-if="showCompose" class="mt-2" @success="showCompose = false" />
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
    isUser: {
      type: Boolean,
      default: true,
    },
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
      return apiLink("/logout");
    },
  },
});
</script>
