<template>
  <div>
    <div class="max-w-2xl mx-auto">
      <TweetCard :status="status" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "StatusPage",
  methods: {
    ...mapActions("status", ["statusFetch"]),
  },
  created() {
    this.statusFetch(this.$route.params.id);
  },
});
</script>
