import { ComponentOptions, VueElement } from "vue";

export const timeline = {
  data: () => ({
    error: "",
  }),
  created() {
    this.load(this.params);
  },
  watch: {
    "$route.query"() {
      this.load(this.params);
    },
  },
  computed: {
    params(): Partial<TimelinePaginationParams> {
      const since_id = this.$route.query.since_id as string;
      const max_id = this.$route.query.max_id as string;
      return {
        ...(since_id && { since_id }),
        ...(max_id && { max_id }),
        ...(this.$options.timelineParams ?? {}),
      };
    },
  },
  methods: {
    changePage(params: Partial<TimelinePaginationParams>) {
      this.$router.push({
        name: this.$route.name as string,
        query: { max_id: params.max_id as string, since_id: params.since_id as string },
      });
      this.load(params);
    },
  },
} as ComponentOptions<VueElement>;
