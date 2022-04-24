<template>
  <section
    class="mb-8 bg-white bg-opacity-90 select-none shadow-sm shadow-zinc-300 rounded-b-sm min-h-[48px]"
  >
    <div class="flex justify-between items-center shrink-0">
      <div>
        <a v-if="isUser" class="flex py-3 px-6" @click="toggleCompose">
          <img src="/icons/message-square-lines.svg" alt="" />
        </a>
      </div>

      <!-- center -->
      <router-link
        class="text-blue-400 mx-auto flex items-center uppercase text-xs px-4"
        :to="{ name: 'Home' }"
        ><a @click="onClickHome" class="cursor-pointer text-gray-500">Piko Client</a></router-link
      >

      <div>
        <!-- right -->
        <a class="flex py-3 px-6" v-if="isUser" :href="logoutLink">
          <img class="scale-x-[-1]" src="/icons/logout.svg" alt="" />
        </a>
      </div>
    </div>
    <ComposeTweet v-if="showCompose" class="mt-2 px-4" @success="showCompose = false" />
  </section>
</template>

<script lang="ts" setup>
import { apiLink } from "@services/api";
import { useLayoutStore } from "@stores/layout-module";
import { computed } from "vue";
import ComposeTweet from "@components/ComposeTweet.vue";
import { useRoute } from "vue-router";
import { isHomeExact } from "@services/url";

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
const emit = defineEmits(["clicked-home"]);

const layoutStore = useLayoutStore();
const toggleCompose = layoutStore.toggleCompose;

const showCompose = computed(() => layoutStore.showCompose);
const logoutLink = apiLink("/logout");

function onClickHome() {
  if (isHomeExact(route)) {
    emit("clicked-home");
  }
}
</script>
