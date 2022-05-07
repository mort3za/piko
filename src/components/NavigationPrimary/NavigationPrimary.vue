<template>
  <nav
    class="sticky bottom-0 bg-white bg-opacity-90 select-none shadow-sm shadow-zinc-400 rounded-t-sm mt-8"
  >
    <ul class="flex justify-between items-center shrink-0">
      <li>
        <router-link class="flex py-3 px-6" :to="{ name: 'Home' }" @click="onClickHome">
          <img src="/icons/home.svg" alt="" />
        </router-link>
      </li>
      <li v-if="hasTimeline">
        <NextPrevPagination v-on="$attrs" @change="emit('change-navigation')" />
      </li>
      <li>
        <router-link class="flex py-3 px-6" :to="{ name: 'Settings' }">
          <img src="/icons/filters.svg" alt="" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import NextPrevPagination from "@components/Pagination/NextPrevPagination.vue";
import { isHomeExact } from "@services/url";
import { useRoute } from "vue-router";

const emit = defineEmits(["change-navigation"]);
const route = useRoute();
defineProps({
  hasTimeline: {
    type: Boolean,
    default: true,
  },
});

function onClickHome() {
  if (isHomeExact(route)) {
    emit("change-navigation");
  }
}
</script>
