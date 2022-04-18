import { ref, computed, watch, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useErrorHnadler } from "@services/errorHandler";
import { useTimelineStore } from "@stores/timeline-module";

type loadFunction = () => Promise<any>;

export function useTimeline(load: loadFunction) {
  const route = useRoute();
  const router = useRouter();
  const timelineStore = useTimelineStore();

  const error = reactive({ message: null, response: null });
  const loading = ref(false);

  const statuses = computed(() => timelineStore.statuses);

  return {
    loading,
    error,
    statuses,
    loadTimeline,
  };

  async function loadTimeline() {
    loading.value = true;
    error.message = null;
    await load().catch(onError);
    loading.value = false;
  }

  async function onError(e: Response) {
    const { onApiError, message, response } = await useErrorHnadler(e);
    error.message = message;
    error.response = response;
    return onApiError(e, router);
  }
}
