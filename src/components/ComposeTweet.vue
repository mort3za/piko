<template>
  <div>
    <TextArea class="w-full mb-2" v-model="text" cols="30" rows="6" :maxlength="280"></TextArea>
    <div class="flex justify-between w-full items-center mb-4">
      <meter min="0" max="280" low="0" high="200" optimum="140" :value="text.length"></meter>
      <Button class="button" @click="submit">Send</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "@components/Base/Button.vue";
import TextArea from "@components/Base/TextArea.vue";
import { useErrorHandler } from "@services/errorHandler";
import { useStatusStore } from "@stores/status-module";
import { reactive, ref } from "vue";

const emit = defineEmits(["success"]);
const props = defineProps({
  in_reply_to_status_id: {
    type: String,
  },
});

const text = ref("");
const error = reactive({ message: null, response: null });

const statusStore = useStatusStore();
const statusPost = statusStore.statusPost;

function submit() {
  statusPost({ status: text.value, in_reply_to_status_id: props.in_reply_to_status_id })
    .then(() => emit("success"))
    .catch(onError);
}

async function onError(e: Response) {
  const { onApiError, message, response } = await useErrorHandler(e);
  error.message = message;
  error.response = response;
  return onApiError(e);
}
</script>
