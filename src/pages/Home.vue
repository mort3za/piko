<template>
  <div>
    count: {{ count }}
    <Tweets :tweets="[]" />
    <LoginButton />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import LoginButton from "@components/LoginButton.vue";
import Tweets from "@components/Tweets.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: { LoginButton, Tweets },
  setup() {
    const store = useStore();
    return { count: computed(() => store.state.count) };
  },
});
</script>
