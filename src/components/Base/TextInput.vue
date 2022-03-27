<script lang="ts">
import HtmlInput from "@components/Base/HtmlInput";
import { defineComponent } from "vue";

const TextInput = defineComponent({
  extends: HtmlInput,
  props: {
    value: {
      type: [String, Number],
      default: undefined,
    },
    autocomplete: {
      type: String,
      default: undefined,
    },
    maxlength: {
      type: [String, Number],
      default: undefined,
    },
    minlength: {
      type: [String, Number],
      default: undefined,
    },
    multiple: {
      type: Boolean,
      default: undefined,
    },
    pattern: {
      type: String,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    classes: {
      type: [String, Array, Object],
      default: undefined,
    },
  },

  methods: {
    blur() {
      (this.$el as HTMLInputElement).blur();
    },

    focus(options?: FocusOptions | undefined) {
      (this.$el as HTMLInputElement).focus(options);
    },
  },
});

export default TextInput;
</script>
