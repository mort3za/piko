import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useApiErrors } from "@mixins/apiErrors";
import { useTimelineStore } from "@stores/timeline-module";

export function useTimeline(timelineParams: Partial<TimelinePaginationParams>) {
  const route = useRoute();
  const router = useRouter();
  const { onApiError } = useApiErrors();
  const timelineStore = useTimelineStore();

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

  load(params.value);

  return {
    error,
    timelineStore,
    changePage,
  };

  function load(params: Partial<TimelinePaginationParams>) {
    error.value = "";
    timelineStore.latestStatusesFetch(params).catch(onApiError);
  }

  function changePage(params: Partial<TimelinePaginationParams>) {
    router.push({
      name: route.name as string,
      query: { max_id: params.max_id as string, since_id: params.since_id as string },
    });
    load(params);
  }
}
