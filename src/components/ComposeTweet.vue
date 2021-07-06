<template>
  <div>
    <textarea
      class="border w-full mb-2"
      v-model="text"
      id=""
      cols="30"
      rows="6"
      :maxlength="280"
    ></textarea>
    <div class="flex justify-between w-full items-center mb-3">
      <meter min="0" max="280" low="0" high="200" optimum="140" :value="text.length"></meter>
      <t-button @click="submit">send</t-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TButton from "@components/base/TButton.vue";

export default defineComponent({
  name: "Home",
  data() {
    return { text: "" };
  },
  components: { TButton },
  methods: {
    submit() {
      console.log("submit...");
    },
  },
});
</script>
