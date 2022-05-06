<template>
  <component :is="tag" v-bind="$attrs" :rel="rel" :to="to" :href="href" class="text-center">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  to: {
    type: [String, Object],
    default: "",
  },
  href: {
    type: String,
    default: "",
  },
});
const tag = computed(() => (Boolean(props.to) ? "router-link" : Boolean(props.href) ? "a" : "button"));

const rel = computed(() => {
  if (props.href) {
    return "noopener noreferrer nofollow";
  }
  return null;
});
</script>
