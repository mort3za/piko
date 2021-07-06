<template>
  <textarea
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="getAttributes()"
    :class="componentClass"
  />
</template>

<script lang="ts">
import TextInput from "@components/base/TextInput.vue";
import { defineComponent } from "vue";

const TTextarea = defineComponent({
  name: "TTextarea",
  extends: TextInput,
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    wrap: {
      type: String,
      default: "soft",
    },
    classes: {
      type: [String, Array, Object],
      default:
        "block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50  disabled:opacity-50 disabled:cursor-not-allowed",
    },
  },
  methods: {
    getAttributes() {
      return {
        ...this.$attrs,
        id: this.id,
        name: this.name,
        disabled: this.disabled,
        readonly: this.readonly,
        autocomplete: this.autocomplete,
        autofocus: this.autofocus,
        required: this.required,
        placeholder: this.placeholder,
        pattern: this.pattern,
        multiple: this.multiple,
        minlength: this.minlength,
        maxlength: this.maxlength,
        wrap: this.wrap,
      };
    },
  },
});

export default TTextarea;
</script>
