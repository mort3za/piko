<template>
  <div class="page layout--fill max-w-2xl mx-auto">
    <HeaderBar class="mb-4" />

    <div class="flex-grow padding-x">
      <h1 class="text-xs font-bold mb-4 uppercase text-slate-400">Lists</h1>

      <p v-if="listsList && listsList.length === 0">You have no lists.</p>
      <ul v-else>
        <li
          class="first:border-t border-b dark:border-slate-700/[0.5]"
          v-for="item in listsList"
          :key="item.id_str"
        >
          <router-link
            class="link py-2 my-1 block"
            :to="{ name: 'List', params: { id: item.id_str } }"
            >{{ item.name }}</router-link
          >
        </li>
      </ul>
    </div>

    <NavigationPrimary :has-timeline="false" />
  </div>
</template>

<script lang="ts" setup>
import HeaderBar from "@components/Layout/HeaderBar.vue";
import NavigationPrimary from "@components/NavigationPrimary/NavigationPrimary.vue";
import { useAccountStore } from "@stores/account-module";
import { ref } from "vue";

const accountStore = useAccountStore();

const listsList: any = ref(null as unknown as any[]);
accountStore.listsListFetch().then((lists: any) => {
  listsList.value = lists.reverse();
});
</script>
