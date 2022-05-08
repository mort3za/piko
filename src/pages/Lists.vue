<template>
  <div class="layout--fill max-w-2xl mx-auto">
    <HeaderBar class="mb-4" />

    <div class="flex-grow padding-x">
      <h1 class="text-xl mb-4">Lists</h1>
      <ul>
        <li class="border-b" v-for="item in listsList" :key="item.id_str">
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

const listsList: any = ref([]);
accountStore.listsListFetch().then((lists: any) => {
  listsList.value = lists.reverse();
});
console.log("listsList", listsList);
</script>
