<template>
  <ul class="absolute right-0 top-full bg-slate-50 rounded-md py-2 w-max shadow-lg">
    <li v-for="(item, index) in items" :key="index" class="py-1 px-2 hover:bg-slate-200">
      <button @click="select(item)">{{ item.text }}</button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
export type DropdownItem = {
  text: string;
  value: string | number;
};
defineProps({
  items: {
    type: Array as () => Array<DropdownItem>,
    required: true,
  },
});

const emit = defineEmits(["select"]);

function select(item: DropdownItem) {
  emit("select", item);
}
</script>
