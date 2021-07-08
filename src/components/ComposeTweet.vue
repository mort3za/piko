<template>
  <div>
    <t-textarea class="w-full mb-2" v-model="text" cols="30" rows="6" :maxlength="280"></t-textarea>
    <div class="flex justify-between w-full items-center mb-3">
      <meter min="0" max="280" low="0" high="200" optimum="140" :value="text.length"></meter>
      <t-button @click="submit">Send</t-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TButton from "@components/base/TButton.vue";
import TTextarea from "@components/base/TTextarea.vue";
import { tweet } from "@functions/api-requests";

export default defineComponent({
  name: "Home",
  data() {
    return { text: "" };
  },
  components: { TButton, TTextarea },
  methods: {
    submit() {
      tweet({ status: this.text });
    },
  },
});
</script>
