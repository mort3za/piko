<template>
  <div>
    <TextArea class="w-full mb-2" v-model="text" cols="30" rows="6" :maxlength="280"></TextArea>
    <div class="flex justify-between w-full items-center">
      <div class="w-20">
        <div v-if="text.length > 140" class="w-full bg-gray-200 h-1">
          <div class="bg-blue-600 h-1" :style="{ width: `${(text.length / 280) * 100}%` }"></div>
        </div>
      </div>
      <Button class="button" @click="submit">{{ submitText }}</Button>
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
  submitText: {
    type: String,
    default: "Tweet",
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
