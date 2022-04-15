<template>
  <section class="mb-8">
    <div class="flex w-full justify-between padding-x py-2 border-b border-blue-200 sticky top-0 z-10">
      <!-- left -->
      <a v-if="isUser" class="button mb-0" @click="toggleCompose">Tweet</a>

      <!-- center -->
      <router-link
        class="text-blue-400 mx-auto flex items-center uppercase text-xs px-4"
        :to="{ name: 'Home' }"
        ><a @click="onClickLogo" class="cursor-pointer">Piko Client</a></router-link
      >

      <!-- right -->
      <a v-if="isUser" :href="logoutLink" class="button mb-0">Logout</a>
    </div>
    <ComposeTweet v-if="showCompose" class="mt-2" @success="showCompose = false" />
  </section>
</template>

<script lang="ts" setup>
import { apiLink } from "@services/api";
import { useLayoutStore } from "@stores/layout-module";
import { computed } from "vue";
import ComposeTweet from "@components/ComposeTweet.vue";
import { useRoute } from "vue-router";

const route = useRoute();
defineProps({
  isUser: {
    type: Boolean,
    default: true,
  },
  back: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["clicked-logo"]);

const layoutStore = useLayoutStore();
const toggleCompose = layoutStore.toggleCompose;

const showCompose = computed(() => layoutStore.showCompose);
const logoutLink = apiLink("/logout");

function onClickLogo() {
  const isHome = route.fullPath === "/home";
  if (isHome) {
    emit("clicked-logo");
  }
}
</script>
