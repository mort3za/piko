<template>
  <section>
    <div class="flex w-full justify-between px-4 py-2 bg-blue-100 sticky top-0 rounded-b-2xl z-10">
      <!-- left -->
      <a v-if="isUser" class="button mb-0" @click="toggleCompose">Tweet</a>

      <router-link class="text-blue-500 mx-auto flex items-center" :to="{ name: 'Home' }"
        >Piko Client</router-link
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
