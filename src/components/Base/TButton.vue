<template>
  <component :is="componentToRender" v-bind="getAttributes()" :class="componentClass">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, h } from "vue";
import HtmlInput from "@components/Base/HtmlInput";

export default defineComponent({
  name: "TButton",
  extends: HtmlInput,
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    tagName: {
      type: String,
      default: "button",
      validator(value: string) {
        return ["button", "a"].indexOf(value) !== -1;
      },
    },
    type: {
      type: String,
      default: undefined,
    },
    href: {
      type: String,
      default: null,
    },
    to: {
      type: [String, Object],
      default: undefined,
    },
    append: {
      type: Boolean,
      default: false,
    },
    activeClass: {
      type: String,
      default: "router-link-active",
    },
    exact: {
      type: Boolean,
      default: false,
    },
    exactActiveClass: {
      type: String,
      default: "router-link-exact-active",
    },
    event: {
      type: [String, Array],
      default: "click",
    },
    data: {
      type: Object,
      default: () => ({}),
    },
    method: {
      type: String,
      default: "get",
    },
    replace: {
      type: Boolean,
      default: false,
    },
    preserveScroll: {
      type: Boolean,
      default: false,
    },
    preserveState: {
      type: Boolean,
      default: false,
    },
    only: {
      type: Array,
      default: () => [],
    },
    native: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: [String, Array, Object],
      default:
        "block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50  disabled:opacity-50 disabled:cursor-not-allowed",
    },
  },
  computed: {
    isInertiaLinkComponentAvailable(): boolean {
      return !!(this.$options.components && this.$options.components.InertiaLink);
    },

    isRouterLinkComponentAvailable(): boolean {
      return !!(
        this.$options.components &&
        (this.$options.components.RouterLink || this.$options.components.NuxtLink)
      );
    },

    /**
     * If we have the `to` defined and the routerLink or Nuxt link component is
     * available we can use it to create a router link
     *
     * @return {Boolean}
     */
    isARouterLink(): boolean {
      return this.to !== undefined && this.isRouterLinkComponentAvailable && !this.native;
    },
    /**
     * If we have the `href` defined and the InertiaLink component is available
     * we can use it to create an inertia link
     *
     * @return {Boolean}
     */
    isAnIntertiaLink(): boolean {
      return (
        this.href !== null &&
        this.tagName === "a" &&
        this.isInertiaLinkComponentAvailable &&
        !this.native
      );
    },
    /**
     * The component to render according to the props
     * @return {String}
     */
    componentToRender() {
      if (this.isARouterLink && this.$options.components) {
        return this.$options.components.NuxtLink || this.$options.components.RouterLink;
      }
      if (this.isAnIntertiaLink) {
        return this.$options.components?.InertiaLink;
      }
      if (this.href) {
        return "a";
      }
      return this.tagName;
    },
  },

  methods: {
    blurHandler(e: FocusEvent) {
      this.$emit("blur", e);
    },
    focusHandler(e: FocusEvent) {
      this.$emit("focus", e);
    },
    clickHandler(e: MouseEvent) {
      this.$emit("click", e);
    },
    keydownHandler(e: MouseEvent) {
      this.$emit("keydown", e);
    },
    mousedownHandler(e: MouseEvent) {
      this.$emit("mousedown", e);
    },
    blur() {
      (this.$el as HTMLButtonElement).blur();
    },
    focus() {
      (this.$el as HTMLButtonElement).focus();
    },
    inertiaLinkAttributes() {
      return {
        data: this.data,
        href: this.href,
        method: this.method,
        replace: this.replace,
        preserveScroll: this.preserveScroll,
        preserveState: this.preserveState,
        only: this.only,
        id: this.id,
        value: this.value,
        autofocus: this.autofocus,
        disabled: this.disabled,
        name: this.name,
        type: this.type,
      };
    },
    routerLinkAttributes() {
      return {
        to: this.to,
        replace: this.replace,
        append: this.append,
        tag: this.tagName,
        activeClass: this.activeClass,
        exact: this.exact,
        event: this.event,
        exactActiveClass: this.exactActiveClass,
        id: this.id,
        value: this.value,
        autofocus: this.autofocus,
        disabled: this.disabled,
        name: this.name,
        type: this.type,
      };
    },

    /**
     * Attrs according to the button type
     * @return {Object}
     */
    getAttributes() {
      if (this.isAnIntertiaLink) {
        return this.inertiaLinkAttributes();
      }
      if (this.isARouterLink) {
        return this.routerLinkAttributes();
      }

      return {
        ...this.$attrs,
        id: this.id,
        value: this.value,
        autofocus: this.autofocus,
        disabled: this.disabled,
        name: this.name,
        href: this.href,
        type: this.type,
      };
    },
  },
});
</script>
