import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useErrorHnadler } from "@services/errorHandler";

type loadFunction = (params: Partial<TimelinePaginationParams>) => Promise<any>;

export function useTimeline(
  load: loadFunction,
  timelineParams: Partial<TimelinePaginationParams> | null = {},
) {
  const route = useRoute();
  const router = useRouter();

  const error = ref("");
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

  return {
    error,
    loadTimeline,
  };

  function loadTimeline() {
    error.value = "";
    load(params.value).catch((error) => {
      const { onApiError } = useErrorHnadler();
      return onApiError(error, router);
    });
  }
}
