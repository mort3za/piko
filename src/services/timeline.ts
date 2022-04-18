import { ref, reactive, toRef } from "vue";
import { useRouter } from "vue-router";
import { useErrorHandler } from "@services/errorHandler";
import { useTimelineStore } from "@stores/timeline-module";

type loadFunction = () => Promise<any>;

export function useTimeline(load: loadFunction) {
  const router = useRouter();
  const timelineStore = useTimelineStore();

  const error = reactive({ message: null, response: null });
  const loading = ref(false);

  return {
    loading,
    error,
    statuses: toRef(timelineStore, "statuses"),
    loadTimeline,
  };

  async function loadTimeline() {
    loading.value = true;
    error.message = null;
    await load().catch(onError);
    loading.value = false;
  }

  async function onError(e: Response) {
    const { onApiError, message, response } = await useErrorHandler(e);
    error.message = message;
    error.response = response;
    return onApiError(e, router);
  }
}
