<template>
  <nav
    class="sticky bottom-0 bg-white dark:bg-slate-800 bg-opacity-90 select-none shadow-sm shadow-zinc-400 dark:shadow-zinc-900 rounded-t-sm mt-8"
  >
    <ul class="flex justify-between items-center shrink-0">
      <li>
        <router-link class="flex py-3 px-6" :to="{ name: 'Home' }" @click="onClickHome">
          <IconHome />
        </router-link>
      </li>
      <li v-if="hasTimeline">
        <NextPrevPagination v-on="$attrs" @change="emit('change-navigation')" />
      </li>
      <li>
        <router-link class="flex py-3 px-6" :to="{ name: 'Lists' }">
          <IconListCenter />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import NextPrevPagination from "@components/Pagination/NextPrevPagination.vue";
import { isHomeExact } from "@services/url";
import { useRoute } from "vue-router";
import IconHome from "@assets/icons/home.svg?component";
import IconListCenter from "@assets/icons/list-center.svg?component";

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
