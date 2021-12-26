<template>
  <div>
    <div class="max-w-2xl mx-auto">
      <ComposeTweet />

      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <template v-else>
        <Statuses :statuses="latestStatusesGet" />
      </template>
    </div>
    <LoginButton />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginButton from "@components/LoginButton.vue";
import Statuses from "@components/Statuses.vue";
import { mapGetters, mapActions } from "vuex";
import ComposeTweet from "@components/ComposeTweet.vue";

export default defineComponent({
  name: "HomePage",
  components: { LoginButton, Statuses, ComposeTweet },
  computed: {
    ...mapGetters("timeline", ["latestStatusesGet"]),
  },
  methods: {
    ...mapActions("timeline", ["latestStatusesFetch"]),
    init() {
      this.loading = true;
      this.error = "";
      this.latestStatusesFetch({ count: 10 })
        .catch((error) => {
          console.log("error.....", error);

          this.error = error.message;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  created() {
    this.init();
  },
});
</script>
