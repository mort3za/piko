import { ref, computed, watch, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useErrorHnadler } from "@services/errorHandler";
import { useTimelineStore } from "@stores/timeline-module";

type loadFunction = (params: Partial<TimelinePaginationParams>) => Promise<any>;

export function useTimeline(
  load: loadFunction,
  timelineParams: Partial<TimelinePaginationParams> | null = {},
) {
  const route = useRoute();
  const router = useRouter();
  const timelineStore = useTimelineStore();

  const error = reactive({ message: null, response: null });
  const loading = ref(false);

  const params = computed(() => {
    const since_id = route.query.since_id as string;
    const max_id = route.query.max_id as string;
    const result = {
      ...(since_id && { since_id }),
      ...(max_id && { max_id }),
      ...(timelineParams ?? {}),
    };
    return result as Partial<TimelinePaginationParams>;
  });

  loadTimeline();
  const fullPath = computed(() => route.fullPath.split("#")[0]);
  watch(fullPath, loadTimeline);

  const statuses = computed(() => timelineStore.statuses);

  return {
    loading,
    error,
    loadTimeline,
    statuses,
  };

  async function loadTimeline() {
    loading.value = true;
    error.message = null;
    await load(params.value).catch(onError);
    loading.value = false;
  }

  async function onError(e: Response) {
    const { onApiError, message, response } = await useErrorHnadler(e);
    error.message = message;
    error.response = response;
    return onApiError(e, router);
  }
}
