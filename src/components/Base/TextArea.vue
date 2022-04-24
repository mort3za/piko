<template>
  <textarea
    class="block w-full px-3 py-2 text-black placeholder-gray-400 bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
    :value="modelValue"
    @input="onInput"
    v-bind="$attrs"
  />
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

function onInput(event: Event) {
  emit("update:modelValue", (event.target as HTMLTextAreaElement).value);
}
</script>
